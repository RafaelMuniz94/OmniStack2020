import { hash, compare } from "bcryptjs";
import IHashProvider from "../Models/IHashProvider";

export default class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    let password = hash(payload, 8);
    return password;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
