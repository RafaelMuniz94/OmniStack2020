import { Router } from "express";
import AppointmentsRepository from "@modules/appointments/infra/Typeorm/repositories/AppointmentsRepository";
import { getParsedHour } from "@appointments/infra/Typeorm/entities/Appointments";
import CreateAppointmentService from "@appointments/services/CreateAppointmentService";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";

const appointmentRouter = Router();


appointmentRouter.use(ensureAuthenticated);

//let appointmentsRepository = new AppointmentsRepository();

appointmentRouter.post("/", async (request, response) => {
  let { provider_id, date } = request.body;

  const appointmentsRepository = new AppointmentsRepository()

  let parsedDate = getParsedHour(date);
  let createService = new CreateAppointmentService(appointmentsRepository);

  let appointment = await createService.execute({ parsedDate, provider_id });

  return response.json({ appointment });
});

//appoinmentRouter.get("/", async (request, response) => {

  //let appointments = await appointmentsRepository.find();

  //return response.json(appointments);
//});

export default appointmentRouter;
