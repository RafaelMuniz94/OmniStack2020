import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import ListProvidersService from "@appointments/services/ListProvidersService";
import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";
import {classToClass} from 'class-transformer'

describe("ListProviderService", () => {
  let listProvider: ListProvidersService;
  let fakeRepo: FakeUsersRepository;
  let fakeCacheProvider: FakeCacheProvider;

  beforeEach(() => {
    fakeRepo = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listProvider = new ListProvidersService(fakeRepo, fakeCacheProvider);
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
    //expect(providers).toContain([classToClass(user1), classToClass(user2)]);
  });
});
