import { Router } from "express";
import AppointmentController from "@appointments/infra/controllers/AppointmentController";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";

const appointmentRouter = Router();
let appointmentController = new AppointmentController();

appointmentRouter.use(ensureAuthenticated);

//let appointmentsRepository = new AppointmentsRepository();

appointmentRouter.post("/", appointmentController.create);

//appoinmentRouter.get("/", async (request, response) => {

//let appointments = await appointmentsRepository.find();

//return response.json(appointments);
//});

export default appointmentRouter;
