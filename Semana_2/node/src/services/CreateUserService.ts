import User from "../model/Users";
import {hash} from "bcryptjs"
import { getRepository } from "typeorm";
import AppError from '../errors/AppError'

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    let userRepository = getRepository(User);

    let userExists = await userRepository.findOne({
      where: { email },
    });

    if (email === "") throw new AppError("Email needs a value!")

    if (userExists) throw new AppError("User already used!");

    let hashedPassword = await hash(password,16)

    let user = userRepository.create({ name, email, password: hashedPassword });

   await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
