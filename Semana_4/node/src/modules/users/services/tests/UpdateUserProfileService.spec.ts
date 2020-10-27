import "reflect-metadata";
import UpdateUserProfileService from "@users/services/UpdateUserProfileService";
import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";
import AppError from "@shared/errors/AppError";

describe("UpdateUserProfile", () => {
  let fakeUserRepo: FakeUsersRepository;
  let fakeHashProvider: FakeHashProvider;
  let updateService: UpdateUserProfileService;

  beforeEach(() => {
    fakeUserRepo = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateService = new UpdateUserProfileService(
      fakeUserRepo,
      fakeHashProvider
    );
  });

  it("should be able to update user complete profile", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    let updatedUser = await updateService.execute({
      user_id: user.id,
      email: "teste_novo@gmail.com",
      name: "Testolhildo",
      password: "abc123",
      old_password: "123654",
    });

    expect(updatedUser.id).toBe(user.id);
    expect(updatedUser.name).toBe("Testolhildo");
    expect(updatedUser.password).toBe("abc123");
    expect(updatedUser.email).toBe("teste_novo@gmail.com");
  });

  it("should be able to update only user name", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    let updatedUser = await updateService.execute({
      user_id: user.id,
      name: "Testolhildo",
    });

    expect(updatedUser.id).toBe(user.id);
    expect(updatedUser.name).toBe("Testolhildo");
    expect(updatedUser.password).toBe(user.password);
    expect(updatedUser.email).toBe(user.email);
  });

  it("should be able to update only user email", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    let updatedUser = await updateService.execute({
      user_id: user.id,
      email: "teste_novo@gmail.com",
    });

    expect(updatedUser.id).toBe(user.id);
    expect(updatedUser.name).toBe(user.name);
    expect(updatedUser.password).toBe(user.password);
    expect(updatedUser.email).toBe("teste_novo@gmail.com");
  });

  it("should be able to update only user password", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    let updatedUser = await updateService.execute({
      user_id: user.id,
      password: "abc123",
      old_password: "123654",
    });

    expect(updatedUser.id).toBe(user.id);
    expect(updatedUser.name).toBe(user.name);
    expect(updatedUser.password).toBe("abc123");
    expect(updatedUser.email).toBe(user.email);
  });

  it("should not be able to update user password without old password", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    await expect(
      updateService.execute({
        user_id: user.id,
        password: "abc123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update user password when old password dont match", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    await expect(
      updateService.execute({
        user_id: user.id,
        password: "abc123",
        old_password: "1236",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update email to a already used Email!", async () => {
    let user = await fakeUserRepo.create({
      email: "teste@gmail.com",
      name: "Testolho",
      password: "123654",
    });

    await fakeUserRepo.create({
      email: "email_ja_usado@gmail.com",
      name: "Ja Usado",
      password: "123654",
    });

    await expect(
      updateService.execute({
        user_id: user.id,
        email: "email_ja_usado@gmail.com",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
