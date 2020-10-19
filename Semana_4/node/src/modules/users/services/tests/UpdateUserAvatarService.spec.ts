import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "@users/providers/HashProvider/Fakes/FakeHashProvider";
import UpdateUserAvatarService from "@users/services/UpdateUserAvatarService";
import CreateUsersService from "@users/services/CreateUserService";
import FakeStorageProvider from "@shared/container/providers/StorageProviders/fakes/FakeStorageProvider";
import AppError from "@shared/errors/AppError";

describe("UpdateUserAvatar", () => {
  it("should create Insert user a new Avatar", async () => {
    let fakerepository = new FakeUsersRepository();
    let fakeHash = new FakeHashProvider();
    let createService = new CreateUsersService(fakerepository, fakeHash);
    let fakeStorage = new FakeStorageProvider();
    let updateService = new UpdateUserAvatarService(
      fakerepository,
      fakeStorage
    );

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
    expect(user.avatar).toBe('ava');
  });

  it("should not update avatar of a non authenticated user", async () => {
    let fakerepository = new FakeUsersRepository();
    let fakeStorage = new FakeStorageProvider();
    let updateService = new UpdateUserAvatarService(
      fakerepository,
      fakeStorage
    );


    expect(
       updateService.execute({
        user_id: "",
        avatarFileName: "ava",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should delete avatar of user that already have an avatar",async() =>{
    let fakerepository = new FakeUsersRepository();
    let fakeHash = new FakeHashProvider();
    let createService = new CreateUsersService(fakerepository, fakeHash);
    let fakeStorage = new FakeStorageProvider();
    let updateService = new UpdateUserAvatarService(
      fakerepository,
      fakeStorage
    );

    let deleteFile =  jest.spyOn(fakeStorage,'deleteFile') // espiona para validar que foi chamado

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

    expect(deleteFile).toHaveBeenCalledWith('oldava')

  })
});
