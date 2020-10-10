import Users from "@users/infra/Typeorm/entities/Users";
import ICreateUserDTO from '@users/Dtos/ICreateUserDTO'

export default interface IUsersRepository {
  findByEmail(email: string):Promise<Users|undefined>// encontrar por email
  create(user:ICreateUserDTO): Promise<Users>// create
  findByID(id: string): Promise<Users | undefined>; // encontrar por id
  save(user:Users): Promise<Users>// save (atualziar)
}
