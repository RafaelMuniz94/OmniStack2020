import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";
import CreateUsersService from "@users/services/CreateUserService";
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";
import AppError from "@shared/errors/AppError";

describe("CreateUser", () => {
  let fakerepository: FakeUsersRepository;
  let fakeCacheProvider: FakeCacheProvider;
  let fakeHash: FakeHashProvider;
  let createService: CreateUsersService;

  beforeEach(() => {
    fakerepository = new FakeUsersRepository();
    fakeHash = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createService = new CreateUsersService(
      fakerepository,
      fakeHash,
      fakeCacheProvider
    );
  });

  it(`should create a new User`, async () => {
    const user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not create user with same email", async () => {
    await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    expect(
      createService.execute({
        name: "Leafar",
        email: "rafael@email.com",
        password: "123654",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not create user with no email", async () => {
    expect(
      createService.execute({
        name: "Leafar",
        email: "",
        password: "123654",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
