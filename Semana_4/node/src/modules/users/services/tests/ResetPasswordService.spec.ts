import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import ResetPasswordService from "@users/services/ResetPasswordService";
import FakeUserTokenRepository from "@users/repositories/fakes/FakeUserTokenRepository";
import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";

let resetPasswordService: ResetPasswordService;
let fakeUserToken: FakeUserTokenRepository;
let fakeUser: FakeUsersRepository;
let fakeHash: FakeHashProvider;

describe("ResetPassword", () => {
  beforeEach(() => {
    fakeUser = new FakeUsersRepository();
    fakeUserToken = new FakeUserTokenRepository();
    fakeHash = new FakeHashProvider();
    resetPasswordService = new ResetPasswordService(
      fakeUser,
      fakeUserToken,
      fakeHash
    );
  });

  it("should be able to reset password", async () => {
    let user = await fakeUser.create({
      name: "Rafael",
      email: "rafael.email@gmail.com",
      password: "123654",
    });

    let generateHash = jest.spyOn(fakeHash, "generateHash");

    let { token } = await fakeUserToken.generate(user.id);

    await resetPasswordService.execute({
      password: "123456",
      token,
    });

    let updatedUser = await fakeUser.findByID(user.id);
    expect(generateHash).toBeCalledWith("123456");
    expect(updatedUser?.password).toBe("123456");
  });

  it("should not Reset a password from a non existing token", async () => {
    let token = "123654";

    await expect(
      resetPasswordService.execute({
        password: "123456",
        token,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it("should not Reset a password from a non existing user", async () => {
    let { token } = await fakeUserToken.generate("123654");

    await expect(
      resetPasswordService.execute({
        password: "abcd",
        token,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not accept a token that been generated more than two hours ago", async () => {
    let user = await fakeUser.create({
      name: "Rafael",
      email: "rafael.email@gmail.com",
      password: "123654",
    });

    let { token } = await fakeUserToken.generate(user.id);

    jest.spyOn(Date, "now").mockImplementation(() => {
      let customDate = new Date();
      return customDate.setHours(customDate.getHours() + 3);
      //customDate.setHours(customDate.getHours() + 2)
      //return customDate.setMinutes(1);
    });

    await expect(
      resetPasswordService.execute({
        password: "123654",
        token,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
