import fs from "fs";
import path from "path";
import uploadConfig from "config/upload";
import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";

export default class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.directory, file),
      path.resolve(uploadConfig.uploadDirectory, file)
    );
    return file;
  }
  public async deleteFile(file: string): Promise<void> {
    let filepath = path.resolve(uploadConfig.uploadDirectory, file);
    try {
      await fs.promises.stat(filepath);
    } catch {
      return;
    }

    await fs.promises.unlink(filepath);
  }
}
