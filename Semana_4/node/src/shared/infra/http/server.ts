import "reflect-metadata"
import 'dotenv/config' // Para importar um JS precisa colocar no tsconfig a opcao AllowJS
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"; // Para poder tratar errors async, deve estar abaixo da importacao do express
import routes from "./routes";
import Cors from "cors"; // Serve apenas para apps com interface web
import "@shared/infra/Typeorm";
import uploadConfig from "@config/upload";
import AppError from "@shared/errors/AppError";
import "@shared/container" // Importando container de dependencias
import {errors} from "celebrate"
import RateLimiter from '@shared/infra/http/middlewares/RateLimiter'
const app = express();




app.use(RateLimiter)
app.use(Cors({
  origin: 'http://localhost:3000'// Para ambiente de dev 
}));// Evita que sites nao confiaveis a aplicacao acessem a api.
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);

//app.use(routes)
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.use(errors())// Trativa de erros de dados ao serem validados, deve estar antes do exception handle global (abaixo)
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
); //Middlewares para tratativa de erros no express devem receber 4 parametros e sempre ficar apos a utilizacao das demais rotas

let port = process.env.APP_PORT
app.listen(port, () => {
  console.log(`Running on ${port} 🚀`);
});
