import Appointments from "../../infra/Typeorm/entities/Appointments";
import { uuid } from "uuidv4";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import ICreateAppointmentsDTO from "@appointments/Dtos/ICreateAppointmentsDTO";

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointments[] = [];
  public async findByDate(parsedDate: Date): Promise<Appointments | undefined> {
    let findAppointment = this.appointments.find(
      (appointment) => appointment.date === parsedDate
    );

    return findAppointment;
  }

  public async create({
    date,
    provider_id,
  }: ICreateAppointmentsDTO): Promise<Appointments> {
    const appointment = new Appointments();
    Object.assign(appointment, { id: uuid(), date, provider_id });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
