import { Router } from "express";
import Users from "../../Typeorm/entities/Users";


import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../../../../../config/upload";
import UserController from '@users/infra/http/controllers/UserController'
import UserAvatarController from '@users/infra/http/controllers/UserAvatarController'

const usersRouter = Router();
const upload = multer(uploadConfig); // Instancia do multer
let userController = new UserController()
let userAvatarController = new UserAvatarController()

usersRouter.post("/", userController.create );

// usersRouter.get("/", async (request, response) => {
  
//   let users = await userRepository.find();

//   users.forEach((user) => {
//     delete user.password;
//   });

//   return response.json(users);
// });

usersRouter.patch(
  "/avatar",
  ensureAuthenticated, // Middleware da autorizacao
  upload.single("avatar"), //Esse middleware serve para indicar o campo que ira conter a imagem e indicar que apenas um arquivo sera feito o upload
  userAvatarController.update
);

export default usersRouter;
