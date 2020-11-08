import { Request, Response } from "express";
import { container } from "tsyringe";
import {classToClass} from 'class-transformer' 
import UpdateUserProfileService from "@users/services/UpdateUserProfileService";
import ShowProfileService from "@users/services/ShowProfileService";

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    let user_id = request.user.id;
    let showService = container.resolve(ShowProfileService);
    let user = await showService.execute({ user_id });

    return response.json(classToClass(user));
  }
  public async create(request: Request, response: Response): Promise<Response> {
    let user_id = request.user.id;
    let { name, email, password, old_password } = request.body;

    let updateProfile = container.resolve(UpdateUserProfileService);

    let user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(classToClass(user));
  }
}
