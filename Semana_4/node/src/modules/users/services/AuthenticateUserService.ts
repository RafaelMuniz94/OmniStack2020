import IUsersRepository from "@users/repositories/IUsersRepository";
import IHashProvider from '@users/providers/HashProvider/Models/IHashProvider'
import { sign } from "jsonwebtoken"; // Assina o token
import AppError from "../../../shared/errors/AppError";
import User from "../infra/Typeorm/entities/Users";
import authConfig from "../../../config/auth";
import { inject, injectable } from "tsyringe";

interface IRequestDto {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}
@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: IRequestDto): Promise<IResponseDTO> {
    let user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError("Incorrect email/password combination.", 401);
    let passwordReceived = user.password || "";
    let passwordMatched = await this.hashProvider.compareHash(password, passwordReceived);

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
