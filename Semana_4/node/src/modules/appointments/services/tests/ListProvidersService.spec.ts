import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import ListProvidersService from "@appointments/services/ListProvidersService";
import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";

describe("ListProviderService", () => {
  let listProvider: ListProvidersService;
  let fakeRepo: FakeUsersRepository;

  beforeEach(() => {
    fakeRepo = new FakeUsersRepository();
    listProvider = new ListProvidersService(fakeRepo);
  });

  it("should list all users except one", async () => {
    let userException = await fakeRepo.create({
      name: "Teste 1",
      email: "email@email.com",
      password: "julena",
    });

    let user1 = await fakeRepo.create({
      name: "Teste 2",
      email: "email@email.com",
      password: "julena",
    });

    let user2 = await fakeRepo.create({
      name: "Teste 3",
      email: "email@email.com",
      password: "julena",
    });

    let providers = await listProvider.execute({
      user_id: userException.id,
    });

    expect(providers.length).toBe(2);
    expect(providers).toEqual([user1, user2]);
  });
});
