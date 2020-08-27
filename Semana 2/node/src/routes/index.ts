import {Router,Request,Response,NextFunction, json} from 'express'
import appointmentsRouter from './appointments.routes'

const routes = Router();

// As rotas devem ser responsaveis por receber a requisicao, chamar outro arquivo e devolver uma resposta, todo o resto devera ficar em seus respectivos componentes

function LogRoutes(request: Request,response:Response,next: NextFunction) {
    let log = `[${request.method}] - ${request.url}`
    console.log(log)
    next()
}
routes.use(LogRoutes)
routes.use(json())
routes.use('/appointments',appointmentsRouter) // Repassa qualquer rota http que ira passar pelo caminho /appointments para o router de appointments
export default routes