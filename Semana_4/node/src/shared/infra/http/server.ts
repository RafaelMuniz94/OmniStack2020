import "reflect-metadata"
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"; // Para poder tratar errors async, deve estar abaixo da importacao do express
import routes from "./routes";
import Cors from "cors"; // Serve apenas para apps com interface web
import "reflect-metadata";
import "@shared/infra/Typeorm";
import uploadConfig from "@config/upload";
import AppError from "@shared/errors/AppError";
import "@shared/container" // Importando container de dependencias
const app = express();

app.use(Cors({
  origin: 'http://localhost:3000'// Para ambiente de dev 
}));// Evita que sites nao confiaveis a aplicacao acessem a api.
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);

//app.use(routes)
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

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

app.listen(3333, () => {
  console.log("Running 🚀");
});
