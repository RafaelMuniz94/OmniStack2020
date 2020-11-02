import ICreateUserDTO from "@users/Dtos/ICreateUserDTO";
import IFindAllProvidersDTO from "@users/Dtos/IFindAllProvidersDTO";
import Users from "@users/infra/Typeorm/entities/Users";
import { uuid } from "uuidv4";
import IUserRepository from "@users/repositories/IUsersRepository";

class UsersRepository implements IUserRepository {
  private users: Users[] = [];

  public async findAll(): Promise<Users[]> {
    return this.users;
  }
  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<Users> {
    let user = new Users();

    Object.assign(user, { id: uuid(), name, email, password });

    this.users.push(user);

    return user;
  }

  public async findAllProviders({
    except_user_id,
  }: IFindAllProvidersDTO): Promise<Users[]> {
    let users = this.users;
    if (except_user_id) {
      users = this.users.filter((user) => user.id !== except_user_id);
    }

    return users;
  }
  public async findByEmail(email: string): Promise<Users | undefined> {
    return this.users.find((user) => user.email === email);
  }
  public async findByID(id: string): Promise<Users | undefined> {
    return this.users.find((user) => user.id === id);
  }

  public async save(user: Users): Promise<Users> {
    let index = this.users.findIndex((u) => u.id === user.id);
    this.users[index] = user;

    return user;
  }
}

export default UsersRepository;
