import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import ISendEmailDTO from "../dtos/ISendEmailDTO";

export default class FakeMailProvider implements IMailProvider {
  private messages: ISendEmailDTO[] = [];

  public async sendMail(message: ISendEmailDTO): Promise<void> {
    this.messages.push(message);
  }
}
