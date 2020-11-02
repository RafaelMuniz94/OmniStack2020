
import IUsersRepository from "@users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import Users from "@users/infra/Typeorm/entities/Users";

interface IUserDTO {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ user_id }: IUserDTO): Promise<Users[]> {
    let users = await this.usersRepository.findAllProviders({
      except_user_id: user_id,
    });

    users.forEach((user) => {
      delete user.password;
    });
    return users;
  }
}
