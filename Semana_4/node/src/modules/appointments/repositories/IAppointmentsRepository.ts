import Appointments from "@appointments/infra/Typeorm/entities/Appointments";
import ICreateAppointmentsDTO from '@appointments/Dtos/ICreateAppointmentsDTO'
import IFindAllInMonthFromProviderDTO from '@appointments/Dtos/IFindAllInMonthFromProviderDTO'
import IFindAllInDayFromProviderDTO from '@appointments/Dtos/IFindAllInDayFromProviderDTO'


interface IAppointmentsRepository {
  create(CreateDTO:ICreateAppointmentsDTO): Promise<Appointments>;
  findByDate(date: Date): Promise<Appointments | undefined>;
  findAllInMonthFromProvider(data: IFindAllInMonthFromProviderDTO): Promise<Appointments[]>;
  findAllInDayFromProvider(data: IFindAllInDayFromProviderDTO): Promise<Appointments[]>;
}

export default IAppointmentsRepository;
