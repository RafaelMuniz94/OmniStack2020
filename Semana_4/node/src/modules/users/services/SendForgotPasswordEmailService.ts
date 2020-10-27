import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import AppError from "@shared/errors/AppError";
import IUserRepository from "@users/repositories/IUsersRepository";
import IUserTokenRepository from "@users/repositories/IUserTokenRepository";
import { inject, injectable } from "tsyringe";
import path from 'path'


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

    let { token } = await this.userTokenRepository.generate(user.id);

    let  file = path.resolve(__dirname,'..','views','forgot_passwords.hbs')
    await this.mailProvider.sendMail({
      subject: `Recuperação de Senha!`,
      to: {
        email: user.email,
        name: user.name,
      },
      from: { email: "equipe@gobarber.com", name: "Equipe GoBarber" },
      templateData: {
        file,
        variables: {
          name: user.name,
          token,
          link: `http://localhost:3000/reset_password?token=${token}`,
          senderName: "Equipe GoBarber"
        },
      },
    });
  }
}

export default SendForgotPasswordEmailService;
