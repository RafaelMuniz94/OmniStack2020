import IUserTokenRepository from "@users/repositories/IUserTokenRepository";
import UserToken from "../entities/UserToken";
import { getRepository, Repository } from "typeorm";

class UsersTokenRepository implements IUserTokenRepository {
  private tokenRepositoy: Repository<UserToken>;

  constructor() {
    this.tokenRepositoy = getRepository(UserToken);
  }

  public async generate(user_id: string): Promise<UserToken> {
    let userToken = this.tokenRepositoy.create({
      user_id,
    });

    await this.tokenRepositoy.save(userToken);

    return userToken;
  }
  public async findByToken(token: string): Promise<UserToken | undefined> {
    let userToken = await this.tokenRepositoy.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }
}

export default UsersTokenRepository;
