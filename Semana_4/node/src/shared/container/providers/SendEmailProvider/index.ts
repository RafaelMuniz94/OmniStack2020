// Mapeamento dos providers

import EtherealMailProvider from "@shared/container/providers/SendEmailProvider/implementations/EtherealMailProvider";
import SESMailProvider from "@shared/container/providers/SendEmailProvider/implementations/SESMailProvider";

import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";

import mailConfig from "@config/mail";
import { container } from "tsyringe";

let providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  "MailProvider",
  providers[mailConfig.driver]
);
