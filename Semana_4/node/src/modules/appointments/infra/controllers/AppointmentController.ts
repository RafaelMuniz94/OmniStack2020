import { Request, Response } from "express";
import { container } from "tsyringe";
import { getParsedHour } from "@appointments/infra/Typeorm/entities/Appointments";
import CreateAppointmentService from "@appointments/services/CreateAppointmentService";

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    // todo metodo de controller possui esse retorno
    let { provider_id, date } = request.body;
    let user_id = request.user.id;

    let parsedDate = getParsedHour(date);
    let createService = container.resolve(CreateAppointmentService);

    let appointment = await createService.execute({
      parsedDate,
      user_id,
      provider_id,
    });

    return response.json({ appointment });
  }
}
