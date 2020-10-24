import { Router } from "express";

import ForgotPasswordController from "@modules/users/infra/http/controllers/ForgotPasswordController";
import ResetPasswordController from "@modules/users/infra/http/controllers/ResetPasswordController";

let passwordRouter = Router();
let forgetController = new ForgotPasswordController();
let resetController = new ResetPasswordController();
passwordRouter.post("/forgot", forgetController.create);
passwordRouter.post("/reset", resetController.create);

export default passwordRouter;
