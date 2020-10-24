import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";

import nodemailer, { Transporter } from "nodemailer";

export default class EtherealMailProvider implements IMailProvider {
  private client: Transporter;
  constructor() {
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
  public async sendMail(to: string, body: string): Promise<void> {
    let message = await this.client.sendMail({
      to,
      from: "Equipe GoBarber <equipe@gobarber.com.br>",
      subject: "Recuperação de Senha!",
      text: body,
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview url: %s", nodemailer.getTestMessageUrl(message));
  }
}
