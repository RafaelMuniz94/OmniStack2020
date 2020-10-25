import { container } from "tsyringe";

import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";
import DiskStorageProvider from "@shared/container/providers/StorageProviders/implementations/DiskStorageProvider";

import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import EtherealMailProvider from "@shared/container/providers/SendEmailProvider/implementations/EtherealMailProvider";
//import IStorageProvider from '@shared/container/providers/SendEmailProvider/implementations/'

import IMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider";
import HandleBarsMailTemplateProvider from "@shared/container/providers/MailTemplateProvider/implementations/HandleBarsMailTemplateProvider";

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DiskStorageProvider
);

container.registerSingleton<IMailTemplateProvider>(
  "MailTemplateProvider",
  HandleBarsMailTemplateProvider
);

container.registerInstance<IMailProvider>(
  "MailProvider",
  container.resolve(EtherealMailProvider)
);
//container.registerSingleton<IMailProvider>('MailProvider',MailProvider)
