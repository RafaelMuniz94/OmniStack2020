import ICacheProvider from "@shared/container/providers/CacheProvider/models/ICacheProvider";
import cacheConfig from "@config/cache";
import Redis, { Redis as RedisClient } from "ioredis";

export default class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;
  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }
  public async invalidatePrefix(prefix: string): Promise<void> {
    let keys = await this.client.keys(`${prefix}:*`);
    let pipeline = this.client.pipeline(); // para gerar um paralelismo

    keys.forEach((key) => {
      pipeline.del(key);
    });

    await pipeline.exec(); // para executar todos os deletes simultaneos
  }
  public async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }
  public async recover<T>(key: string): Promise<T | null> {
    let data = await this.client.get(key);

    if (!data) return null;

    return JSON.parse(data) as T;
  }
  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }
}
