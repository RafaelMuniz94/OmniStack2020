import { Router } from "express";
import Users from "../model/Users";
import { getRepository } from "typeorm";
import CreateUserService from "../services/CreateUserService";
const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
  try {
    let { email, name, password } = request.body;
    let user = await new CreateUserService().execute({ email, name, password });
    delete user.password
    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.get("/", async (request, response) => {
  try {
    let userRepo = getRepository(Users);
    let users = await userRepo.find();

    users.forEach((user)=>{
      delete user.password
    })

    return response.json(users);
    
  } catch (err) {
    return response.status(400).json({
      error: err.message,
    });
  }
});

export default usersRouter;
