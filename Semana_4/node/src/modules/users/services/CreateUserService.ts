import User from "../infra/Typeorm/entities/Users";
import { hash } from "bcryptjs";
import UserRepository from "@users/repositories/IUsersRepository";
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
    private userRepository: UserRepository
  ) {}

  public async execute({ name, email, password }: IRequestDTO): Promise<User> {
    let userExists = await this.userRepository.findByEmail(email);

    if (email === "") throw new AppError("Email needs a value!");

    if (userExists) throw new AppError("User already used!");

    let hashedPassword = await hash(password, 16);

    let user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
