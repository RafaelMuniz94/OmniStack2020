import { Router } from "express";
import { Joi, celebrate, Segments } from "celebrate";
import ensureAuthenticated from "@users/infra/http/middlewares/ensureAuthenticated";
import ProvidersController from "@modules/appointments/infra/controllers/ProvidersController";
import ProviderDailyAvailabilityController from "@modules/appointments/infra/controllers/ProviderDailyAvailabilityController";
import ProviderMonthAvailabilityController from "@modules/appointments/infra/controllers/ProviderMonthAvailabilityController";

let providersRouter = Router();
let providersController = new ProvidersController();
let dailyController = new ProviderDailyAvailabilityController();
let monthController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get("/", providersController.index);

providersRouter.get(
  "/:provider_id/day-availability",
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  dailyController.index
);
providersRouter.get(
  "/:provider_id/month-availability",
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  monthController.index
);

export default providersRouter;
