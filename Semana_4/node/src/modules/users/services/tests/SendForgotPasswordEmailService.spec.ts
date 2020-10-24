import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import SendForgotPasswordEmailService from "@users/services/SendForgotPasswordEmailService";
import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeUserTokenRepository from "@users/repositories/fakes/FakeUserTokenRepository";
import FakeMailProvider from "@shared/container/providers/SendEmailProvider/fakes/FakeMailProvider";

let fakeRepo: FakeUsersRepository;
let fakeTokenRepo: FakeUserTokenRepository;
let fakeEmail: FakeMailProvider;
let sendService: SendForgotPasswordEmailService;

describe("SendForgotPasswordEmail", () => {
  beforeEach(() => {
    fakeRepo = new FakeUsersRepository();
    fakeTokenRepo = new FakeUserTokenRepository();
    fakeEmail = new FakeMailProvider();
    sendService = new SendForgotPasswordEmailService(
      fakeRepo,
      fakeEmail,
      fakeTokenRepo
    );
  });

  it("should be able to recover password using users email", async () => {
    let sendEmail = jest.spyOn(fakeEmail, "sendMail");

    await fakeRepo.create({
      name: "Testolho",
      email: "teste@email.com",
      password: "teste123",
    });

    await sendService.execute({ email: "teste@email.com" });

    expect(sendEmail).toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalledTimes(1);
  });

  it("should be able to send recover email only to emails that exists", async () => {
    await expect(
      sendService.execute({ email: "teste@email.com" })
    ).rejects.toBeInstanceOf(AppError);
  });

  // it("Email link should expire in 2hs", async () => {
  //   expect(true).toBe(false);
  // });

  it("should generate forgot password token", async () => {
    let generatedToken = jest.spyOn(fakeTokenRepo, "generate");

    let user = await fakeRepo.create({
      name: "Testolho",
      email: "teste@email.com",
      password: "teste123",
    });

    await sendService.execute({ email: "teste@email.com" });

    expect(generatedToken).toBeCalledTimes(1);
    expect(generatedToken).toHaveBeenCalledWith(user.id);
  });
});
