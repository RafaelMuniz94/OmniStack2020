import UsersRepository from "@users/repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"; // Assina o token
import AppError from "../../../shared/errors/AppError";
import User from "../infra/Typeorm/entities/Users";
import authConfig from "../../../config/auth";

interface IRequestDto {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(private usersRepository: UsersRepository) {}

  public async execute({
    email,
    password,
  }: IRequestDto): Promise<IResponseDTO> {
    let user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("Incorrect email/password combination.", 401);
    let passwordReceived = user.password || "";
    let passwordMatched = await compare(password, passwordReceived);

    if (!passwordMatched)
      throw new AppError("Incorrect email/password combination.", 401);

    let token = sign({ name: user.name }, authConfig.jwt.secret, {
      subject: user.id, // qual user criou o token
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { user, token };
  }
}

export default AuthenticateUserService;
