import { Request, Response } from "express";
import { container } from "tsyringe";
import ListProvidersService from "@appointments/services/ListProvidersService";

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    let user_id = request.user.id;
    let listProvider = container.resolve(ListProvidersService);

    let providers = await listProvider.execute({ user_id });

    return response.json(providers);
  }
}
