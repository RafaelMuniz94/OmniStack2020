import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"; // Assina o token

import User from "../model/Users";
import authConfig from '../config/auth'

interface RequestDto {
  email: string;
  password: string;
}

interface ResponseDTO {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: RequestDto): Promise<ResponseDTO> {
    const usersRepository = getRepository(User);

    let user = await usersRepository.findOne({
      where: {
        email,
      },
    });

    if (!user) throw new Error("Incorrect email/password combination.");

    let passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new Error("Incorrect email/password combination.");

      let token = sign({name:user.name},authConfig.jwt.secret,{
          subject: user.id, // qual user criou o token
          expiresIn: authConfig.jwt.expiresIn
      })

    return { user, token};
  }
}

export default AuthenticateUserService;
