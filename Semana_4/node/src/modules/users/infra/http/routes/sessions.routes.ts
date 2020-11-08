import { Router } from "express";
import { Joi, celebrate, Segments } from "celebrate";
import SessionController from "@users/infra/http/controllers/SessionController";
const sessionsRouter = Router();

let sessionController = new SessionController();

sessionsRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
    },
  }),
  sessionController.create
);

export default sessionsRouter;
