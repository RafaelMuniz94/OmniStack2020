import { Router } from "express";
import Users from "../../Typeorm/entities/Users";
import UsersRepository from "@users/infra/Typeorm/repositories/UsersRepository";
import CreateUserService from "../../../services/CreateUserService";
import UpdateUserAvatarService from "../../../services/UpdateUserAvatarService";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../../../../../config/upload";

const usersRouter = Router();
const upload = multer(uploadConfig); // Instancia do multer


usersRouter.post("/", async (request, response) => {
  let { email, name, password } = request.body;

  let userRepository = new UsersRepository()

  let user = await new CreateUserService(userRepository).execute({ email, name, password });
  delete user.password;
  return response.status(201).json(user);
});

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
  async (request, response) => {
    let userRepository = new UsersRepository()
    let updateService = new UpdateUserAvatarService(userRepository);
    let user = await updateService.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });
    delete user.password;
    return response.json(user);
  }
);

export default usersRouter;
