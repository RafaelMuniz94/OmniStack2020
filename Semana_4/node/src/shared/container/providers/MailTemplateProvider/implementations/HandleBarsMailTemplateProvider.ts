import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";
import IParseMailTemplateDTO from "../dtos/IParseMailTemplateDTO";
import handlebars from "handlebars";

export default class HandleBarsMailTemplateProvider
  implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    let parsedTemplate = handlebars.compile(template);
    return parsedTemplate(variables);
  }
}
