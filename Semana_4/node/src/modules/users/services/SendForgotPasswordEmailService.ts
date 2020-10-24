import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import AppError from "@shared/errors/AppError";
import IUserRepository from "@users/repositories/IUsersRepository";
import IUserTokenRepository from '@users/repositories/IUserTokenRepository'
import { inject, injectable } from "tsyringe";

interface IRequestDTO {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository,
    @inject("MailProvider")
    private mailProvider: IMailProvider,
    @inject("UsersTokenRepository")
    private userTokenRepository: IUserTokenRepository
  ) {}

  //public async execute({ email, message }: IRequestDTO): Promise<void> {
  public async execute({ email }: IRequestDTO): Promise<void> {
    let user = await this.userRepository.findByEmail(email);

    if (!user)
      throw new AppError("User not found - The email must be valid!", 404);

    let {token} = await this.userTokenRepository.generate(user.id)

    let body = `Pedido de recuperação de senha recebido com sucesso!\nUtilize o token: ${token} para recuperação!`;
    await this.mailProvider.sendMail(email, body);
  }
}

export default SendForgotPasswordEmailService;
