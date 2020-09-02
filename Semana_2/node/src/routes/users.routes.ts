import { Router } from "express";
import Users from "../model/Users";
import { getRepository } from "typeorm";
import CreateUserService from "../services/CreateUserService";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";

const usersRouter = Router();
const upload = multer(uploadConfig); // Instancia do multer

usersRouter.post("/", async (request, response) => {
  try {
    let { email, name, password } = request.body;
    let user = await new CreateUserService().execute({ email, name, password });
    delete user.password;
    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.get("/", async (request, response) => {
  try {
    let userRepo = getRepository(Users);
    let users = await userRepo.find();

    users.forEach((user) => {
      delete user.password;
    });

    return response.json(users);
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

usersRouter.patch(
  "/avatar",
  ensureAuthenticated, // Middleware da autorizacao
  upload.single("avatar"), //Esse middleware serve para indicar o campo que ira conter a imagem e indicar que apenas um arquivo sera feito o upload
  async (request, response) => {
    try {
      let updateService = new UpdateUserAvatarService();
      let user = await updateService.execute({
        user_id: request.user.id,
        avatarFileName: request.file.filename,
      });
      delete user.password;
      return response.json(user);
    } catch (err) {
      response.status(400).json({ error: err.message });
    }
  }
);

export default usersRouter;
