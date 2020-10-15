import { Router } from "express";
import SessionController from '@users/infra/http/controllers/SessionController'
const sessionsRouter = Router();

let sessionController = new SessionController()

sessionsRouter.post("/",sessionController.create);

export default sessionsRouter;
