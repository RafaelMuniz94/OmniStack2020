import UserToken from "@users/infra/Typeorm/entities/UserToken";

export default interface IUserTokenRepository {
  generate(user_id: string): Promise<UserToken>;
  findByToken(token: string): Promise<UserToken | undefined>;
}
