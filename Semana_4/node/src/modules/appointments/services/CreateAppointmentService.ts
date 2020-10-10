import Appointments from "../infra/Typeorm/entities/Appointments";
import AppError from '@shared/errors/AppError'
import IAppointmentsRepository from "../repositories/IAppointmentsRepository";

interface IRequestDTO {
  provider_id: string;
  parsedDate: Date;
}

class CreateAppointmentService {


  constructor(
    private appointmentsRepository: IAppointmentsRepository // Cria automaticamente a variavel dentro da classe
  ){

  }

  public async execute({ parsedDate, provider_id }: IRequestDTO): Promise<Appointments> {

    let findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      parsedDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError("This appointment is already booked!");
    }

    let appointment = await this.appointmentsRepository.create({
      provider_id,
      date: parsedDate,
    });

    
    return appointment;
  } // Esse metodo deve ser unico no service
}

export default CreateAppointmentService;
