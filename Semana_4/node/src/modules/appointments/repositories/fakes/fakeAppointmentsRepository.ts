import Appointments from "../../infra/Typeorm/entities/Appointments";
import { uuid } from "uuidv4";
import { isEqual, getMonth, getYear, getDate } from "date-fns";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import ICreateAppointmentsDTO from "@appointments/Dtos/ICreateAppointmentsDTO";
import IFindAllInMonthFromProviderDTO from "@appointments/Dtos/IFindAllInMonthFromProviderDTO";
import IFindAllInDayFromProviderDTO from "@modules/appointments/Dtos/IFindAllInDayFromProviderDTO";

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointments[] = [];
  public async findByDate(parsedDate: Date): Promise<Appointments | undefined> {
    let findAppointment = this.appointments.find(
      (appointment) => appointment.date === parsedDate
    );

    return findAppointment;
  }

  public async findAllInDayFromProvider({
    day,
    month,
    provider_id,
    year,
  }: IFindAllInDayFromProviderDTO): Promise<Appointments[]> {
    let appointments = this.appointments.filter(
      (appointment) =>
        appointment.provider_id === provider_id &&
        getDate(appointment.date) === day &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year
    );

    return appointments
  }

  public async findAllInMonthFromProvider({
    month,
    provider_id,
    year,
  }: IFindAllInMonthFromProviderDTO): Promise<Appointments[]> {
    let appointments = this.appointments.filter(
      (appointment) =>
        appointment.provider_id === provider_id &&
        getMonth(appointment.date) + 1 === month &&
        getYear(appointment.date) === year
    );

    return appointments;
  }

  public async create({
    date,
    user_id,
    provider_id,
  }: ICreateAppointmentsDTO): Promise<Appointments> {
    const appointment = new Appointments();
    Object.assign(appointment, { id: uuid(), date,user_id, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
