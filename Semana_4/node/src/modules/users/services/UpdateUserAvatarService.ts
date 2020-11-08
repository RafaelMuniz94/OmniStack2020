import IUserRepository from "@users/repositories/IUsersRepository";
import Users from "../infra/Typeorm/entities/Users";
import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";
import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequestDTO {
  user_id: string;
  avatarFileName: string;
}

@injectable()
class UpdateUserAvatarService {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}
  public async execute({
    user_id,
    avatarFileName,
  }: IRequestDTO): Promise<Users> {
    const user = await this.userRepository.findByID(user_id);
    
    if (!user)
    throw new AppError("Only authenticated users can change avatar.", 401);
    
    if (user.avatar) {
      //Deletar avatar anterior
      await this.storageProvider.deleteFile(user.avatar);
    }
    
    let fileName = await this.storageProvider.saveFile(avatarFileName);
    user.avatar = fileName;
    await this.userRepository.save(user); // pode ser usado para salvar e atualizar
    return user;
  }
}

export default UpdateUserAvatarService;
