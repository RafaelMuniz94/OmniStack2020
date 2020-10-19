import IStorageProvider from "@shared/container/providers/StorageProviders/models/IStorageProvider";

export default class FakeStorageProvider implements IStorageProvider {
  private storage: string[] = [];
  public async saveFile(file: string): Promise<string> {
    this.storage.push(file);
    return file;
  }
  public async deleteFile(file: string): Promise<void> {
    let index = this.storage.findIndex((fi) => fi === file);

    this.storage.splice(index, 1);
  }
}
