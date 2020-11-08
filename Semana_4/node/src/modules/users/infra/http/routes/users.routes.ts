import { Router } from "express";
import { Joi, celebrate, Segments } from "celebrate";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../../../../../config/upload";
import UserController from "@users/infra/http/controllers/UserController";
import UserAvatarController from "@users/infra/http/controllers/UserAvatarController";

const usersRouter = Router();
const upload = multer(uploadConfig.multer); // Instancia do multer
let userController = new UserController();
let userAvatarController = new UserAvatarController();

usersRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  userController.create
);

usersRouter.get("/", userController.index);

usersRouter.patch(
  "/avatar",
  ensureAuthenticated, // Middleware da autorizacao
  upload.single("avatar"), //Esse middleware serve para indicar o campo que ira conter a imagem e indicar que apenas um arquivo sera feito o upload
  userAvatarController.update
);

export default usersRouter;
