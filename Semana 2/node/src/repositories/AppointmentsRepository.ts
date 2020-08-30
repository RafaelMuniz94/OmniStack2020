import Appointments from "../model/Appointments";
import { EntityRepository, Repository } from "typeorm";

// O repository é responsavel pela comunicacao da aplicacao com o seu componente de pesrsistencia

// interface CreateAppointmentDTO{
//     provider: string,
//     date: Date
// } Nao necessario com Typeorm

@EntityRepository(Appointments)
class AppointmentsRepository extends Repository<Appointments> {
  // private appointments: Appointments[];

  // constructor() {
  //   this.appointments = [];
  // }

  // public create(data: CreateAppointmentDTO): Appointments {

  //   let {provider, date} = data
  //   let appointment = new Appointments({provider, date});
  //   this.appointments.push(appointment);

  //   return appointment;
  // }

  // public all(): Appointments[]{
  //     return this.appointments
  // }

  /**
   *
   * Com a utilizacao do typeorm nao é necessario utilizar os metodos para criar e buscar todos os elementos e tambem nao é necessario o array
   */

  public async findByDate(parsedDate: Date): Promise<Appointments | null> {
    // return this.appointments.find((appoinment) =>
    //   isEqual(parsedDate, appoinment.date)
    // ) || null;

    let findAppointments = await this.findOne({
      where: {
        date: parsedDate,
      },
    });

    return findAppointments || null;
  }
}

export default AppointmentsRepository;
