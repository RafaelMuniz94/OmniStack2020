import UserRepository from "@users/repositories/IUsersRepository";
import Users from "../infra/Typeorm/entities/Users";
import path from "path";
import fs from "fs";
import uploadConfig from "../../../config/upload";
import AppError from '../../../shared/errors/AppError'

interface IRequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  constructor(
    private userRepository: UserRepository
  ){}
  public async execute({
    user_id,
    avatarFileName,
  }: IRequestDTO): Promise<Users> {
    

    const user = await this.userRepository.findByID(user_id);

    if (!user) throw new AppError("Only authenticated users can change avatar.",401);

    if (user.avatar) {
      //Deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFileName;
    await this.userRepository.save(user); // pode ser usado para salvar e atualizar
    return user;
  }
}

export default UpdateUserAvatarService;
