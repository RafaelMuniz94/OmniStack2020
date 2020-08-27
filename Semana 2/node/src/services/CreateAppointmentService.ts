import Appointments from "../model/Appointments";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface RequestDTO {
  provider: string;
  parsedDate: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(repo: AppointmentsRepository) {
    /**
     * Dependecy Inversion (SOLID)
     * Sempre que houver uma dependencia externa, ao inves de instanciar ela novamente nos receberemos ela como parametro no constructor
     */

    this.appointmentsRepository = repo;
  }

  public execute({ parsedDate, provider }: RequestDTO): Appointments {
    let findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      parsedDate
    );

    if (findAppointmentInSameDate) {
      throw Error("This appointment is already booked!");
    }

    let appointment = this.appointmentsRepository.create({
      provider,
      date: parsedDate,
    });

    return appointment;
  } // Esse metodo deve ser unico no service
}

export default CreateAppointmentService;
