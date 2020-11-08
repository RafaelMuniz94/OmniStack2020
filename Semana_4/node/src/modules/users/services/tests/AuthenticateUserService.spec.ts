import FakeUserRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";
import AuthenticateUserService from "@users/services/AuthenticateUserService";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";
import CreateUserService from "@users/services/CreateUserService";
import AppError from "@shared/errors/AppError";
import authConfig from "@config/auth";

describe("AuthenticateUser", () => {
  let fakeRepo: FakeUserRepository;
  let fakeHash: FakeHashProvider;
  let fakeCacheProvider: FakeCacheProvider;
  let createService: CreateUserService;
  let authService: AuthenticateUserService;

  beforeEach(() => {
    fakeRepo = new FakeUserRepository();
    fakeHash = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createService = new CreateUserService(
      fakeRepo,
      fakeHash,
      fakeCacheProvider
    );
    authService = new AuthenticateUserService(fakeRepo, fakeHash);
  });
  it("should Authenticate User", async () => {
    authConfig.jwt.secret = "Teste";

    const user = await fakeRepo.create({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    let auth = await authService.execute({
      email: "rafael@email.com",
      password: "123654",
    });

    expect(auth).toHaveProperty("user");
    expect(auth.user).toEqual(user);
    expect(auth.token).toEqual(expect.any(String));
  });

  it("should not authenticate a not created user", async () => {
    let fakeRepo = new FakeUserRepository();
    let fakeHash = new FakeHashProvider();
    let authService = new AuthenticateUserService(fakeRepo, fakeHash);

    expect(
      authService.execute({ email: "rafael@email.com", password: "123654" })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not accept empty password", async () => {
    const user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    expect(
      authService.execute({ email: "rafael@email.com", password: "" })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not accept empty  email", async () => {
    const user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    expect(
      authService.execute({ email: "", password: "123654" })
    ).rejects.toBeInstanceOf(AppError);
  });
});
