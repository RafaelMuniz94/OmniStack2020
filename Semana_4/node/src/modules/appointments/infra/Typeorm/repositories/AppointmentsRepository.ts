import Appointments from "../entities/Appointments";
import { getRepository, Repository } from "typeorm";
import IAppointmentsRepository from "@appointments/repositories/IAppointmentsRepository";
import ICreateAppointmentsDTO from "@appointments/Dtos/ICreateAppointmentsDTO";

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
    provider_id,
  }: ICreateAppointmentsDTO): Promise<Appointments> {
    let appointment = this.ormRepository.create({
      provider_id,
      date,
    });
    await this.ormRepository.save(appointment)
    return appointment
  }
}

export default AppointmentsRepository;
