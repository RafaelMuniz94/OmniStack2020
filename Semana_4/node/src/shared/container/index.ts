import { container } from "tsyringe";

// Appointmens Imports
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "@appointments/infra/Typeorm/repositories/AppointmentsRepository";

// Users Imports
import '@users/providers/index'
import IUsersRepository from "@users/repositories/IUsersRepository";
import UsersRepository from "@users/infra/Typeorm/repositories/UsersRepository";

// Providers Imports

import '@shared/container/providers'

container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository
); // Passando o generic eu garanto que a variavel deve ser daquele tipo

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
