import { Request, Response } from "express";
import { container } from "tsyringe";
import ResetPasswordService from "@users/services/ResetPasswordService";

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    let resetService = container.resolve(ResetPasswordService);
    let { password, token } = request.body;
    await resetService.execute({ password, token });

    return response.status(201).json("Password alterado com sucesso!");
  }
}
