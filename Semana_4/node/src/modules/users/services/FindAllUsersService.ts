import AppError from "@shared/errors/AppError";
import IUsersRepository from "@users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class FindAllUsersService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute() {
    let users = await this.usersRepository.findAll();
    users.forEach((user) => {
        delete user.password;
      });
    return users;
  }
}
