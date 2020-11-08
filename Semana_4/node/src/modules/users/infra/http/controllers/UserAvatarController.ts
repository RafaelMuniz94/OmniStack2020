import { Request, Response } from "express";
import { container } from "tsyringe";
import { classToClass } from "class-transformer";
import UpdateUserAvatarService from "../../../services/UpdateUserAvatarService";

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    let updateService = container.resolve(UpdateUserAvatarService);
    let user = await updateService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });
    return response.json(classToClass(user));
  }
}
