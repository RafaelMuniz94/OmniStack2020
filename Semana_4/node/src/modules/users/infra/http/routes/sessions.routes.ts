import { Router } from "express";
import AuthenticateUserService from "../../../services/AuthenticateUserService";
import UsersRepository from '@users/infra/Typeorm/repositories/UsersRepository'

const sessionsRouter = Router();


sessionsRouter.post("/", async (request, response) => {
  let { email, password } = request.body;

  let userRepository = new UsersRepository()

  const authService = new AuthenticateUserService(userRepository);

  let { user, token } = await authService.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
