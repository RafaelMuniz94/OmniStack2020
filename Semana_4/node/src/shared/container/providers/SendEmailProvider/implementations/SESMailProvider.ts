import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";
import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import ISendEmailDTO from "@shared/container/providers/SendEmailProvider/dtos/ISendEmailDTO";
import nodemailer, { Transporter } from "nodemailer";
import aws from "aws-sdk";
import mailConfig from '@config/mail'
import { inject, injectable } from "tsyringe";

@injectable()
export default class SESMailProvider implements IMailProvider {
  private client: Transporter;
  constructor(
    @inject("MailTemplateProvider")
    private mailTemplateProvider: IMailTemplateProvider
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: "2010-12-01",
        region: process.env.AWS_DEFAULT_REGION
      }),
    });
  }

  public async sendMail({
    subject,
    templateData,
    to,
    from,
  }: ISendEmailDTO): Promise<void> {
    let {name,email} = mailConfig.defaults.from
    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email ||email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}
