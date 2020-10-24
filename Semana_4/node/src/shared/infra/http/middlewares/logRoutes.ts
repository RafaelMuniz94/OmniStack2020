import { Request, Response, NextFunction } from "express";

export default function LogRoutes(
  request: Request,
  response: Response,
  next: NextFunction
) {
  let log = `[${request.method}] - ${request.url}`;
  console.log(log);
  next();
}
