import { Router } from "express";
import { getCustomRepository } from "typeorm";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import { getParsedHour } from "../model/Appointments";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appoinmentRouter = Router();

//let appointmentsRepository = new AppointmentsRepository();

appoinmentRouter.post("/", async (request, response) => {
  try {
    let { provider, date } = request.body;

    let parsedDate = getParsedHour(date);
    let createService = new CreateAppointmentService();

    let appointment = await createService.execute({ parsedDate, provider });

    return response.json(appointment);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appoinmentRouter.get("/", async (request, response) => {
  let appointmentsRepository = getCustomRepository(AppointmentsRepository);

  let appointments = await appointmentsRepository.find();
  return response.json(appointments);
});

export default appoinmentRouter;
