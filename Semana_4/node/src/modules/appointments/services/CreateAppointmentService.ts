import Appointments from "../infra/Typeorm/entities/Appointments";
import AppError from "@shared/errors/AppError";
import IAppointmentsRepository from "../repositories/IAppointmentsRepository";
import INotificationsRepository from "@notifications/repositories/INotificationsRepository"
import { injectable, inject } from "tsyringe";
import { isBefore, getHours,format } from "date-fns";

interface IRequestDTO {
  user_id: string;
  provider_id: string;
  parsedDate: Date;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject("AppointmentsRepository")
    private appointmentsRepository: IAppointmentsRepository ,// Cria automaticamente a variavel dentro da classe

    @inject("NotificationRepository")
    private notificationRepository: INotificationsRepository
  ) {}

  public async execute({
    parsedDate,
    user_id,
    provider_id,
  }: IRequestDTO): Promise<Appointments> {
    if (isBefore(parsedDate, Date.now()))
      throw new AppError("This appointment could not be set to past date.");

    if (user_id === provider_id)
      throw new AppError("You cannot book to yourself!");

    if (getHours(parsedDate) < 8 || getHours(parsedDate) > 17)
      throw new AppError(
        "You can only create appointment between 8am and 5pm!"
      );

    let findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      parsedDate
    );

    if (findAppointmentInSameDate) {
      throw new AppError("This appointment is already booked!");
    }

    let appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: parsedDate,
    });

    await this.notificationRepository.create({
      recipient_id: provider_id,
      content:`Novo agendamento para dia ${format(parsedDate,"dd/MM/yyyy 'às' HH:mm.")}`
    })

    return appointment;
  } // Esse metodo deve ser unico no service
}

export default CreateAppointmentService;
