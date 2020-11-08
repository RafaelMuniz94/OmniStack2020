import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";
import UpdateUserAvatarService from "@users/services/UpdateUserAvatarService";
import CreateUsersService from "@users/services/CreateUserService";
import FakeStorageProvider from "@shared/container/providers/StorageProviders/fakes/FakeStorageProvider";
import AppError from "@shared/errors/AppError";
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";

describe("UpdateUserAvatar", () => {
  let fakerepository: FakeUsersRepository;
  let fakeHash: FakeHashProvider;
  let fakeCacheProvider: FakeCacheProvider;
  let createService: CreateUsersService;
  let fakeStorage: FakeStorageProvider;
  let updateService: UpdateUserAvatarService;

  beforeEach(() => {
    fakerepository = new FakeUsersRepository();
    fakeHash = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createService = new CreateUsersService(
      fakerepository,
      fakeHash,
      fakeCacheProvider
    );
    fakeStorage = new FakeStorageProvider();
    updateService = new UpdateUserAvatarService(fakerepository, fakeStorage);
  });

  it("should create Insert user a new Avatar", async () => {
    let user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    let avatar = user.avatar;
    user = await updateService.execute({
      user_id: user.id,
      avatarFileName: "ava",
    });

    expect(user.avatar === avatar).toBeFalsy();
    expect(user.avatar).toBe("ava");
  });

  it("should not update avatar of a non authenticated user", async () => {

    expect(
      updateService.execute({
        user_id: "",
        avatarFileName: "ava",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should delete avatar of user that already have an avatar", async () => {


    let deleteFile = jest.spyOn(fakeStorage, "deleteFile"); // espiona para validar que foi chamado

    let user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    user = await updateService.execute({
      user_id: user.id,
      avatarFileName: "oldava",
    });

    let oldAvatar = user.avatar;

    user = await updateService.execute({
      user_id: user.id,
      avatarFileName: "ava",
    });

    expect(user.avatar === oldAvatar).toBeFalsy();

    expect(deleteFile).toHaveBeenCalledWith("oldava");
  });
});
