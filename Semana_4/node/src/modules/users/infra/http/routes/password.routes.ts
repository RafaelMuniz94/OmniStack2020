import { Router } from "express";
import { Joi, celebrate, Segments } from "celebrate";
import ForgotPasswordController from "@modules/users/infra/http/controllers/ForgotPasswordController";
import ResetPasswordController from "@modules/users/infra/http/controllers/ResetPasswordController";

let passwordRouter = Router();
let forgetController = new ForgotPasswordController();
let resetController = new ResetPasswordController();
passwordRouter.post(
  "/forgot",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgetController.create
);
passwordRouter.post(
  "/reset",
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref("password")),
    },
  }),
  resetController.create
);

export default passwordRouter;
