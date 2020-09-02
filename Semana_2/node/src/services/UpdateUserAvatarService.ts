import { getRepository } from "typeorm";
import Users from "../model/Users";
import path from "path";
import fs from "fs";
import uploadConfig from "../config/upload";

interface RequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({
    user_id,
    avatarFileName,
  }: RequestDTO): Promise<Users> {
    let userRepository = getRepository(Users);

    const user = await userRepository.findOne(user_id);

    if (!user) throw new Error("Only authenticated users can change avatar.");

    if (user.avatar) {
      //Deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFileName;
    await userRepository.save(user); // pode ser usado para salvar e atualizar
    return user;
  }
}

export default UpdateUserAvatarService;
