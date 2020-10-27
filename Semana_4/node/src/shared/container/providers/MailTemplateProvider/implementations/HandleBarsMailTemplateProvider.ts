import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";
import IParseMailTemplateDTO from "../dtos/IParseMailTemplateDTO";
import handlebars from "handlebars";
import fs from 'fs'

export default class HandleBarsMailTemplateProvider
  implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {

    let template = await fs.promises.readFile(file,{
      encoding:`utf-8`
    })
    let parsedTemplate = handlebars.compile(template);
    return parsedTemplate(variables);
  }
}
