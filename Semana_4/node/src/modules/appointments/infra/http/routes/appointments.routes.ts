import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";
import AppointmentController from "@modules/appointments/infra/controllers/AppointmentController";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";
import ProviderAppointmentController from "@modules/appointments/infra/controllers/ProviderAppointmentController";

const appointmentRouter = Router();
let appointmentController = new AppointmentController();
let providerAppointmentController = new ProviderAppointmentController();
appointmentRouter.use(ensureAuthenticated);

//let appointmentsRepository = new AppointmentsRepository();

appointmentRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date().required(),
    },
  }),
  appointmentController.create
);
appointmentRouter.get("/me", providerAppointmentController.index);

//appoinmentRouter.get("/", async (request, response) => {

//let appointments = await appointmentsRepository.find();

//return response.json(appointments);
//});

export default appointmentRouter;
