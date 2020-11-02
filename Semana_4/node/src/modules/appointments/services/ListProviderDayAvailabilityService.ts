import { inject, injectable } from "tsyringe";
import { getHours, isAfter } from "date-fns";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import Users from "@users/infra/Typeorm/entities/Users";
import AppError from "@shared/errors/AppError";

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
export default class ListProviderDayAvailabilityService {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<IResponse> {
    if (!day) throw new AppError("You must provide a day to continue!");

    if (!month) throw new AppError("You must provide a month to continue!");

    if (!year) throw new AppError("You must provide a year to continue!");

    let appointments = await this.appointmentsRepository.findAllInDayFromProvider(
      {
        provider_id,
        day,
        month,
        year,
      }
    );

    let hourStart = 8;

    let eachHourArray = Array.from(
      {
        length: 10,
      },
      (_, index) => index + hourStart
    );

    let currentDate = new Date(Date.now());
    let availability = eachHourArray.map((hour) => {
      let hasAppointmentInHour = appointments.find(
        (appointment) => getHours(appointment.date) === hour
      );

      let compareDate = new Date(year, month - 1, day, hour);

      return {
        hour,
        available: !hasAppointmentInHour && isAfter(compareDate, currentDate),
      };
    });

    return availability;
  }
}
