import { injectable, inject } from "tsyringe";

import AppError from "@shared/errors/AppError";
import IUsersRepository from "@users/repositories/IUsersRepository";
import User from "@users/infra/Typeorm/entities/Users";

interface IProfileIdentification {
  user_id: string;
}
@injectable()
class ShowProfileService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) {}

  public async execute({ user_id }: IProfileIdentification): Promise<User> {
    let user = await this.userRepository.findByID(user_id);

    if (!user) throw new AppError("User not found!", 404);

    return user;
  }
}
export default ShowProfileService;
