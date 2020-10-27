import IUsersRepository from "@users/repositories/IUsersRepository";
import IHashProvider from "@users/providers/HashProvider/Models/IHashProvider";
import Users from "@users/infra/Typeorm/entities/Users";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequestDTO {
  user_id: string;
  password?: string;
  old_password?: string;
  name?: string;
  email?: string;
}

@injectable()
export default class UpdateUserProfileService {
  constructor(
    @inject("UsersRepository")
    private userRepo: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    user_id,
    password,
    old_password,
    name,
    email,
  }: IRequestDTO): Promise<Users> {
    let user = await this.userRepo.findByID(user_id);
    if (!user) throw new AppError("User not found!", 404);

    if (email) {
      let userbyEmail = await this.userRepo.findByEmail(email);
      if (userbyEmail && userbyEmail.id !== user.id)
        throw new AppError("The email is already used!");
    }

    if (password && !old_password) {
      throw new AppError("Old Password must be provided");
    }

    if (old_password) {
      if (
        user.password &&
        !(await this.hashProvider.compareHash(old_password, user.password))
      )
        throw new AppError("Wrong password!");
    }

    user = Object.assign(user, {
      password: password
        ? await this.hashProvider.generateHash(password)
        : user.password,
      name: name ? name : user.name,
      email: email ? email : user.email,
    });

    return this.userRepo.save(user);
  }
}
