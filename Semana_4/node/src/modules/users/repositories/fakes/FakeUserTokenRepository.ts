import { uuid } from "uuidv4";
import IUserTokenRepository from "@users/repositories/IUserTokenRepository";
import UserToken from "@users/infra/Typeorm/entities/UserToken";

export default class FakeUserTokenRepository implements IUserTokenRepository {
  private userTokens: UserToken[] = [];
  public async generate(user_id: string): Promise<UserToken> {
    let token = new UserToken();

    Object.assign(token, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.userTokens.push(token);
    return token;
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    let returnToken = this.userTokens.find((user) => {
      return token === user.token;
    });

    return returnToken;
  }
}
