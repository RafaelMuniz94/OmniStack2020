import { Router } from "express";
import { getCustomRepository } from "typeorm";
import AppointmentsRepository from "../repositories/AppointmentsRepository";
import { getParsedHour } from "../model/Appointments";
import CreateAppointmentService from "../services/CreateAppointmentService";
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const appoinmentRouter = Router();

appoinmentRouter.use(ensureAuthenticated)

//let appointmentsRepository = new AppointmentsRepository();

appoinmentRouter.post("/", async (request, response) => {
  try {
    let { provider_id, date } = request.body;

    let parsedDate = getParsedHour(date);
    let createService = new CreateAppointmentService();

    let appointment = await createService.execute({ parsedDate, provider_id });

    return response.json({appointment});
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appoinmentRouter.get("/", async (request, response) => {
  let appointmentsRepository = getCustomRepository(AppointmentsRepository);

  let appointments = await appointmentsRepository.find();
  //eturn response.json({appointments,user:request.user}); //Teste da passagem de valores atraves do middleware
  return response.json(appointments);
});

export default appoinmentRouter;
