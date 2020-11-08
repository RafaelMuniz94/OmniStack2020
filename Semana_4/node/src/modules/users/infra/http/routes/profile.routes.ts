import { Router } from "express";
import { Joi, celebrate, Segments } from "celebrate";
import ProfileController from "@users/infra/http/controllers/ProfileController";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";

let profileRouter = Router();
let profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);
profileRouter.put(
  "/update",
  celebrate({
    [Segments.BODY]: {
        name: Joi.string(),
        email:Joi.string().email(),
        old_password:Joi.string(),
        password: Joi.string(),
        password_confirmation:Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.create
);
profileRouter.get("/show", profileController.show);

export default profileRouter;
