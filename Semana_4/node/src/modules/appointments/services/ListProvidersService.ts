import IUsersRepository from "@users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";
import Users from "@users/infra/Typeorm/entities/Users";
import {classToClass} from 'class-transformer'

interface IUserDTO {
  user_id: string;
}

@injectable()
export default class ListProvidersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  public async execute({ user_id }: IUserDTO): Promise<Users[]> {
    let users = await this.cacheProvider.recover<Users[]>(`provider-list:${user_id}`);

    if (!users)
      users = await this.usersRepository.findAllProviders({
        except_user_id: user_id,
      });

    await this.cacheProvider.save(`provider-list:${user_id}`, classToClass(users));
    return classToClass(users);
  }
}
