import { Router } from "express";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import { getParsedHour } from "../model/Appointments";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appoinmentRouter = Router();

let appointmentsRepository = new AppointmentsRepository();

appoinmentRouter.post("/", (request, response) => {
  try {
    let { provider, date } = request.body;

    let parsedDate = getParsedHour(date);
    let createService = new CreateAppointmentService(appointmentsRepository);

    let appointment = createService.execute({ parsedDate, provider });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appoinmentRouter.get("/", (request, response) => {
  let appointments = appointmentsRepository.all();
  return response.json(appointments);
});

export default appoinmentRouter;
