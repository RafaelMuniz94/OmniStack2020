import { Router } from "express";
import { getParsedHour } from "../model/Appointments";

import AppointmentsRepository from "../repositories/AppointmentsRepository";

const appoinmentRouter = Router();

let appointmentsRepository = new AppointmentsRepository();

appoinmentRouter.post("/", (request, response) => {
  let { provider, date } = request.body;

  let parsedDate = getParsedHour(date);
  let findAppointmentInSameDate = appointmentsRepository.findByDate(parsedDate);

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: "This appointment is already booked!" });
  }

  let appointment = appointmentsRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

appoinmentRouter.get("/", (request, response) => {
  let appointments = appointmentsRepository.all();
  return response.json(appointments);
});

export default appoinmentRouter;
