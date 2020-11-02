import { inject, injectable } from "tsyringe";
import { getDaysInMonth, getDate } from "date-fns";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import AppError from "@shared/errors/AppError";

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

@injectable()
export default class ListProviderMonthAvailabilityService {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    month,
    year,
  }: IRequest): Promise<IResponse> {
    if (!month) throw new AppError("You must provide a month to continue!");

    if (!year) throw new AppError("You must provide a year to continue!");

    let appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      {
        month,
        provider_id,
        year,
      }
    );

    let daysInMonth = getDaysInMonth(new Date(year, month - 1));

    let eachDayArray = Array.from(
      {
        length: daysInMonth,
      },
      (value, index) => index + 1
    );

    let availability = eachDayArray.map((day) => {
      let appointmentsInDay = appointments.filter((appointments) => {
        return getDate(appointments.date) === day;
      });

      return {
        day,
        available: appointmentsInDay.length < 10,
      };
    });

    return availability;
  }
}
