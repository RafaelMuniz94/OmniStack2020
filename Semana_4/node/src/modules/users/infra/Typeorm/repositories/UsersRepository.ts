import ICreateUserDTO from "@users/Dtos/ICreateUserDTO";
import Users from "@users/infra/Typeorm/entities/Users";
import IUserRepository from "@users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUserRepository {
    private ormRepository: Repository<Users>
  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    let user = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(user);
    return user;
  }

  public async findByEmail(email: string): Promise<Users | undefined> {
    let user = await this.ormRepository.findOne({
      where:{
        email
      }
    });
    return user;
  }
  public async findByID(id: string): Promise<Users | undefined> {
    let user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });
    return user;
  }

  public async save(user:Users):Promise<Users>{
    return await this.ormRepository.save(user)
  }
}

export default UsersRepository