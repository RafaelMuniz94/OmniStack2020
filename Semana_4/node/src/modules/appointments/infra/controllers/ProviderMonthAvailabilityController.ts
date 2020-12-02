import { Request, Response } from "express";
import { container } from "tsyringe";

import ListProviderMonthAvailabilityService from "@appointments/services/ListProviderMonthAvailabilityService";

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    let {provider_id} = request.params;
    let { month, year } = request.query;
    let listProvider = container.resolve(ListProviderMonthAvailabilityService);
    let availability = await listProvider.execute({
      month:Number(month),
      provider_id,
      year:Number(year),
    });

    return response.json(availability);
  }
}
