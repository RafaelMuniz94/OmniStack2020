import Appointments from "@appointments/infra/Typeorm/entities/Appointments";
import ICreateAppointmentsDTO from '@appointments/Dtos/ICreateAppointmentsDTO'


interface IAppointmentsRepository {
  create(CreateDTO:ICreateAppointmentsDTO): Promise<Appointments>;
  findByDate(date: Date): Promise<Appointments | undefined>;
}

export default IAppointmentsRepository;
