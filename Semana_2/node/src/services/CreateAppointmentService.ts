import Appointments from "../model/Appointments";
import {getCustomRepository} from 'typeorm'
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface RequestDTO {
  provider_id: string;
  parsedDate: Date;
}

class CreateAppointmentService {
  // private appointmentsRepository: AppointmentsRepository;

  // constructor(repo: AppointmentsRepository) {
  //   /**
  //    * Dependecy Inversion (SOLID)
  //    * Sempre que houver uma dependencia externa, ao inves de instanciar ela novamente nos receberemos ela como parametro no constructor
  //    */

  //   this.appointmentsRepository = repo;
  // }

  public async execute({ parsedDate, provider_id }: RequestDTO): Promise<Appointments> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)
    let findAppointmentInSameDate = await appointmentsRepository.findByDate(
      parsedDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This appointment is already booked!");
    }

    let appointment = appointmentsRepository.create({
      provider_id,
      date: parsedDate,
    }); // Cria porem nao salva no banco de dados

    await appointmentsRepository.save(appointment) // salva no banco de dados

    return appointment;
  } // Esse metodo deve ser unico no service
}

export default CreateAppointmentService;
