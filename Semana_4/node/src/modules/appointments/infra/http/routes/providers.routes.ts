import { Router } from "express";

import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";
import ProvidersController from "@appointments/infra/controllers/ProvidersController";
import ProviderDailyAvailabilityController from "@appointments/infra/controllers/ProviderDailyAvailabilityController";
import ProviderMonthAvailabilityController from "@appointments/infra/controllers/ProviderMonthAvailabilityController";

let providersRouter = Router();
let providersController = new ProvidersController();
let dailyController = new ProviderDailyAvailabilityController();
let monthController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get("/", providersController.index);

providersRouter.get("/:provider_id/day-availability", dailyController.index);
providersRouter.get("/:provider_id/month-availability", monthController.index);

export default providersRouter;
