import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";
import ISendEmailDTO from "../dtos/ISendEmailDTO";
import nodemailer, { Transporter } from "nodemailer";
import { inject, injectable } from "tsyringe";

@injectable()
export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;
  constructor(
    @inject("MailTemplateProvider")
    private mailTemplateProvider: IMailTemplateProvider
  ) {
    nodemailer.createTestAccount().then((account) => {
      let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }
  public async sendMail({
    to,
    subject,
    templateData,
    from,
  }: ISendEmailDTO): Promise<void> {
    let message = await this.client.sendMail({
      to: `${to.name} <${to.email}>`,
      from: {
        name: from?.name || "Equipe GoBarber",
        address: from?.email || "equipe@gobarber.com.br",
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview url: %s", nodemailer.getTestMessageUrl(message));
  }
}
