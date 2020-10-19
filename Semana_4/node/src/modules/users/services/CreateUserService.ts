import User from "../infra/Typeorm/entities/Users";
import IHashProvider from '@users/providers/HashProvider/Models/IHashProvider'
import IUserRepository from "@users/repositories/IUsersRepository";
import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({ name, email, password }: IRequestDTO): Promise<User> {
    let userExists = await this.userRepository.findByEmail(email);

    if (email === "") throw new AppError("Email needs a value!");

    if (userExists) throw new AppError("User already used!");

    let hashedPassword = await this.hashProvider.generateHash(password)

    let user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
