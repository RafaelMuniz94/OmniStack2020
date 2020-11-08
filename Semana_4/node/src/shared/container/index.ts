import { container } from "tsyringe";

// Appointmens Imports
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "@appointments/infra/Typeorm/repositories/AppointmentsRepository";

// Users Imports
import "@users/providers/index";
import IUsersRepository from "@users/repositories/IUsersRepository";
import UsersRepository from "@users/infra/Typeorm/repositories/UsersRepository";

import IUserTokenRepository from "@users/repositories/IUserTokenRepository";
import UsersTokenRepository from "@users/infra/Typeorm/repositories/UsersTokenRepository";


import INotificationsRepository from '@notifications/repositories/INotificationsRepository'
import NotificationsRepository from '@notifications/repositories/NotificationsRepository'

// Providers Imports

import "@shared/container/providers";

container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository
); // Passando o generic eu garanto que a variavel deve ser daquele tipo

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IUserTokenRepository>(
  "UsersTokenRepository",
  UsersTokenRepository
);

container.registerSingleton<INotificationsRepository>(
  "NotificationRepository",
  NotificationsRepository
)
