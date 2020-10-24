import AppError from "@shared/errors/AppError";
import IUsersRepository from "@users/repositories/IUsersRepository";
import { isAfter, addHours } from "date-fns";
import IUserTokenRepository from "@users/repositories/IUserTokenRepository";
import IHashProvider from "@users/providers/HashProvider/Models/IHashProvider";
import { inject, injectable } from "tsyringe";

interface IRequest {
  password: string;
  token: string;
}

@injectable()
class ResetPasswordService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository,
    @inject("UsersTokenRepository")
    private userTokenRepository: IUserTokenRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  public async execute({ password, token }: IRequest): Promise<void> {
    let userToken = await this.userTokenRepository.findByToken(token);

    if (!userToken) throw new AppError("Token not Found!", 404);

    
    let twoHoursFromNow = addHours(userToken.created_at, 2);

    if (isAfter(Date.now(), twoHoursFromNow))
      throw new AppError("Token expired!", 400);

    let user = await this.userRepository.findByID(userToken.user_id);

    if (!user) throw new AppError("User not Found!", 404);

    user.password = await this.hashProvider.generateHash(password);

    this.userRepository.save(user);
  }
}

export default ResetPasswordService;
