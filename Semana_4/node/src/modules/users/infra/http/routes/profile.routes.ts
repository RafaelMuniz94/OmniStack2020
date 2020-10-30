import { Router } from "express";
import ProfileController from "@users/infra/http/controllers/ProfileController";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";

let profileRouter = Router();
let profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);
profileRouter.put("/update", profileController.create);
profileRouter.get("/show", profileController.show);

export default profileRouter;
