import { Router, json } from "express";
import appointmentsRouter from "@modules/appointments/infra/http/routes/appointments.routes";
import usersRouter from "@users/infra/http/routes/users.routes";
import profileRouter from "@users/infra/http/routes/profile.routes";
import sessionsRouter from "@users/infra/http/routes/sessions.routes";
import passwordRouter from "@users/infra/http/routes/password.routes";
import LogRoutes from "@shared/infra/http/middlewares/logRoutes";
const routes = Router();

// As rotas devem ser responsaveis por receber a requisicao, chamar outro arquivo e devolver uma resposta, todo o resto devera ficar em seus respectivos componentes

routes.use(LogRoutes);
routes.use(json());
routes.use("/appointments", appointmentsRouter); // Repassa qualquer rota http que ira passar pelo caminho /appointments para o router de appointments
routes.use("/users", usersRouter); // Repassa qualquer rota http que ira passar pelo caminho /users para o router de users
routes.use("/sessions", sessionsRouter);
routes.use("/password", passwordRouter);
routes.use('/profile', profileRouter)

export default routes;
