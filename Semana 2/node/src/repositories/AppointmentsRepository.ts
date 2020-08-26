import Appointments from "../model/Appointments";
import { isEqual } from "date-fns";

class AppointmentsRepository {
  private appointments: Appointments[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointments {
    let appointment = new Appointments(provider, date);
    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(parsedDate: Date): Appointments | null {
    return this.appointments.find((appoinment) =>
      isEqual(parsedDate, appoinment.date)
    ) || null;
  }

  public returnAll(): Appointments[]{
      return this.appointments
  }
}

export default AppointmentsRepository;
