import express, {Request,Response,NextFunction} from "express";
import  "express-async-errors"; // Para poder tratar errors async, deve estar abaixo da importacao do express
import routes from "./routes";
import 'reflect-metadata'
import './database'
import uploadConfig from './config/upload'
import AppError from './errors/AppError'

const app = express();
app.use('/files',express.static(uploadConfig.directory))
app.use(routes)

//app.use(routes)
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.use((err:Error,request:Request,response:Response,next:NextFunction) =>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status:"error",
      message: err.message
    })
  }

  console.log(err)

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}) //Middlewares para tratativa de erros no express devem receber 4 parametros e sempre ficar apos a utilizacao das demais rotas




app.listen(3333, () => {
  console.log("Running 🚀");
});
