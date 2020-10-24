import { Request, Response } from "express";
import { container } from "tsyringe";


import SendForgotPasswordEmailService from "@users/services/SendForgotPasswordEmailService";

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    let sendService = container.resolve(SendForgotPasswordEmailService);
    let { email } = request.body;

    await sendService.execute({
      email,
    });

    return response.status(204).json();
  }
}
