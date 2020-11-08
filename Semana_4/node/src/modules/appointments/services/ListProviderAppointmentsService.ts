import { inject, injectable } from "tsyringe";

import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import Appointments from "@appointments/infra/Typeorm/entities/Appointments";

interface IRequest {
  provider_id: string;
  day: number;
  month: number;
  year: number;
}

@injectable()
export default class ListProviderAppointmentsService {
  constructor(
    @inject(`AppointmentsRepository`)
    private appointmentRepo: IAppointmentsRepository
  ) {}

  public async execute({
    provider_id,
    day,
    month,
    year,
  }: IRequest): Promise<Appointments[]> {
    let appointments = await this.appointmentRepo.findAllInDayFromProvider({
      provider_id,
      day,
      month,
      year,
    });

    return appointments;
  }
}
