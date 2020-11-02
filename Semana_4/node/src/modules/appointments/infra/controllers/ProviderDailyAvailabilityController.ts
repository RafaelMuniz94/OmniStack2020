import { Request, Response } from "express";
import { container } from "tsyringe";

import ListProviderDayAvailabilityService from "@appointments/services/ListProviderDayAvailabilityService";

export default class ProviderDailyAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    let { provider_id } = request.params;
    let { day, month, year } = request.body;
    let listProvider = container.resolve(ListProviderDayAvailabilityService);
    let availability = await listProvider.execute({
      day,
      month,
      provider_id,
      year,
    });

    return response.json(availability);
  }
}
