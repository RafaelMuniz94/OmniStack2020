import {Request,Response} from 'express'
import {classToClass} from 'class-transformer'
import AuthenticateUserService from "../../../services/AuthenticateUserService";
import { container } from "tsyringe";

// Para estar de acordo com o REST um controller deve possuir apenas 5 metodos, sendo: index (listagem),show (unico),create,update(todas as propriedades, senao criar um novo controller),delete
export default class SessionController{


    public async create(request:Request, response:Response): Promise<Response> {
        let { email, password } = request.body;
      
        const authService = container.resolve(AuthenticateUserService);
      
        let { user, token } = await authService.execute({
          email,
          password,
        });
      
        return response.json({ user:classToClass(user), token });
      }
}