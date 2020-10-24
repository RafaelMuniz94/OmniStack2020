import { container } from "tsyringe";

import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";
import DiskStorageProvider from "@shared/container/providers/StorageProviders/implementations/DiskStorageProvider";

import IMailProvider from "@shared/container/providers/SendEmailProvider/models/IMailProvider";
import EtherealMailProvider from "@shared/container/providers/SendEmailProvider/implementations/EtherealMailProvider";
//import IStorageProvider from '@shared/container/providers/SendEmailProvider/implementations/'

container.registerInstance<IMailProvider>(
  "MailProvider",
  new EtherealMailProvider()
);

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  DiskStorageProvider
);
//container.registerSingleton<IMailProvider>('MailProvider',MailProvider)
