import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude, Expose } from "class-transformer";
import uploadConfig from "@config/upload";
// KISS - Keep It simple & Stupid

@Entity("users")
class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password?: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "avatar_url" })
  getAvatar_url(): string | null {
    if (!this.avatar) return null;

    let path;
    switch (uploadConfig.driver) {
      case "s3":
        path = `${process.env.AWS_BUCKET_URL}/${this.avatar}`;
        break;
      default:
        path = `${process.env.APP_API_URL}/files/uploads/${this.avatar}`;
        break;
    }
    return path;
  }
}

export default Users;
