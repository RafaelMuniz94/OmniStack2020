import Appointments from "../model/Appointments";
import { isEqual } from "date-fns";

// O repository é responsavel pela comunicacao da aplicacao com o seu componente de pesrsistencia

interface CreateAppointmentDTO{
    provider: string,
    date: Date
}


class AppointmentsRepository {
  private appointments: Appointments[];

  constructor() {
    this.appointments = [];
  }

  public create(data: CreateAppointmentDTO): Appointments {

    let {provider, date} = data
    let appointment = new Appointments({provider, date});
    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(parsedDate: Date): Appointments | null {
    return this.appointments.find((appoinment) =>
      isEqual(parsedDate, appoinment.date)
    ) || null;
  }

  public all(): Appointments[]{
      return this.appointments
  }
}

export default AppointmentsRepository;
