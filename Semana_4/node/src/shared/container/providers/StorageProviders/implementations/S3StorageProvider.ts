import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";
import path from "path";
import fs from "fs";
import aws, { S3 } from "aws-sdk";
import uploadConfig from "@config/upload";
import AppError from "@shared/errors/AppError";
import mime from "mime";

export default class S3StorageProvider implements IStorageProvider {
  private client: S3;
  constructor() {
    this.client = new aws.S3({
      region: process.env.AWS_DEFAULT_REGION,
    });
  }

  public async saveFile(file: string): Promise<string> {
    let originalPath = path.resolve(uploadConfig.uploadDirectory, file);
    let fileContent = await fs.promises.readFile(originalPath);
    let ContentType = mime.getType(originalPath);

    if (!ContentType) throw new AppError(`File ${file} not found!`);

    let Bucket = uploadConfig.config.aws.bucket;

    if (!Bucket) throw new AppError("Must provide a valid S3 Bucket", 500);

    await this.client
      .putObject({
        Bucket,
        Key: file,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
        ContentDisposition: `inline; filename=${file}`,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }
  public async deleteFile(file: string): Promise<void> {
    let Bucket = uploadConfig.config.aws.bucket;

    if (!Bucket) throw new AppError("Must provide a valid S3 Bucket", 500);

    await this.client
      .deleteObject({
        Bucket,
        Key: file,
      })
      .promise();
  }
}
