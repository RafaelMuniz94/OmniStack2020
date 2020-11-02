import Appointments from "../entities/Appointments";
import { getRepository, Repository, Raw } from "typeorm";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import ICreateAppointmentsDTO from "@appointments/Dtos/ICreateAppointmentsDTO";
import IFindAllInMonthFromProviderDTO from "@appointments/Dtos/IFindAllInMonthFromProviderDTO";
import IFindAllInDayFromProviderDTO from "@modules/appointments/Dtos/IFindAllInDayFromProviderDTO";

// O repository é responsavel pela comunicacao da aplicacao com o seu componente de pesrsistencia

// interface CreateAppointmentDTO{
//     provider: string,
//     date: Date
// } Nao necessario com Typeorm

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointments>;
  constructor() {
    this.ormRepository = getRepository(Appointments); // criando Repo
  }

  public async findAllInDayFromProvider({
    day,
    month,
    provider_id,
    year,
  }: IFindAllInDayFromProviderDTO): Promise<Appointments[]> {
    let parsedDay = String(day).padStart(2, "0");
    let parsedMonth = String(month).padStart(2, "0");

    let appointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          (dateFieldName) =>
            `to_char(${dateFieldName},'DD-MM-YYYY') = '${parsedDay}-${parsedMonth}-${year}'`
        ),
      },
    });

    return appointments
  }
  public async findAllInMonthFromProvider({
    month,
    provider_id,
    year,
  }: IFindAllInMonthFromProviderDTO): Promise<Appointments[]> {
    let parsedMonth = String(month).padStart(2, "0");
    let appointments = await this.ormRepository.find({
      where: {
        provider_id,
        date: Raw(
          (dateFieldName) =>
            `to_char(${dateFieldName},'MM-YYYY') = '${parsedMonth}-${year}'`
        ),
      },
    });

    return appointments
  }

  public async findByDate(parsedDate: Date): Promise<Appointments | undefined> {
    let findAppointments = await this.ormRepository.findOne({
      where: {
        date: parsedDate,
      },
    });

    return findAppointments;
  }

  public async create({
    date,
    user_id,
    provider_id,
  }: ICreateAppointmentsDTO): Promise<Appointments> {
    let appointment = this.ormRepository.create({
      provider_id,
      user_id,
      date,
    });
    await this.ormRepository.save(appointment);
    return appointment;
  }
}

export default AppointmentsRepository;
