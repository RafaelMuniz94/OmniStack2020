import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "../config/auth";

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  let authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("JWT token is missing!");

  let [, token] = authHeader.split(" ");

  try {
    let decoded = verify(token, authConfig.jwt.secret);

    let { sub } = decoded as TokenPayload;

    request.user = {
        id: sub
    } // As rotas que utilizarem esse middleware terao acesso a esse valor

    return next();
  } catch {
    throw new Error(`Invalid JWT token`);
  }
}
