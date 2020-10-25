import ISendEmailDTO from "@shared/container/providers/SendEmailProvider/dtos/ISendEmailDTO";
export default interface IMailProvider {
  sendMail(data: ISendEmailDTO): Promise<void>;
}
