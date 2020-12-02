import { Request, Response } from "express";
import { container } from "tsyringe";
import ListProviderAppointmentsService from "@appointments/services/ListProviderAppointmentsService";
import { classToClass } from "class-transformer";

export default class ProviderAppointmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    let provider_id = request.user.id;
    let { day, month, year } = request.query;
    let listService = container.resolve(ListProviderAppointmentsService);

    let appointments = await listService.execute({
      day:Number(day),
      month:Number(month),
      provider_id,
      year:Number(year),
    });
    
    return response.json(classToClass(appointments));
  }
}
 