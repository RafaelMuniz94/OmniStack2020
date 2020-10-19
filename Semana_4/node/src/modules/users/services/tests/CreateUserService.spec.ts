import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";
import FakeHashProvider from '@users/providers/HashProvider/Fakes/FakeHashProvider'
import CreateUsersService from "@users/services/CreateUserService";
import AppError from '@shared/errors/AppError'

describe("CreateUser", () => {
  it(`should create a new User`, async () => {
    let fakerepository = new FakeUsersRepository();
    let fakeHash = new FakeHashProvider()
    let createService = new CreateUsersService(fakerepository,fakeHash);

    const user = await createService.execute({
      name: "Rafael",
      email: "rafael@email.com",
      password: "123654",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not create user with same email", async () => {
    let fakerepository = new FakeUsersRepository();
    let fakeHash = new FakeHashProvider()
    let createService = new CreateUsersService(fakerepository,fakeHash);

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
      ).rejects.toBeInstanceOf(AppError)
  });

  it('should not create user with no email',async() =>{
    let fakerepository = new FakeUsersRepository();
    let fakeHash = new FakeHashProvider()
    let createService = new CreateUsersService(fakerepository,fakeHash);

    expect(
        createService.execute({
            name: "Leafar",
            email:'',
            password: "123654",
        })
    ).rejects.toBeInstanceOf(AppError)
  })
});
