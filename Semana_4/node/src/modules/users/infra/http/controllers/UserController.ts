import { Request, Response } from "express";
import CreateUserService from "../../../services/CreateUserService";
import {container} from "tsyringe"


export default class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    let { email, name, password } = request.body;

    let user = await container
      .resolve(CreateUserService)
      .execute({ email, name, password });
    delete user.password;
    return response.status(201).json(user);
  }


}
