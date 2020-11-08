import { Request, Response, NextFunction } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import redis from "redis";
import AppError from "@shared/errors/AppError";

let redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASS || undefined,
});

let rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "ratelimit",
  points: 10,
  duration: 1,
  blockDuration: 10
});

export default async function rate(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    await rateLimiter.consume(request.ip);

    next();
  } catch (err) {
    throw new AppError("Too many request!", 429);
  }
}
