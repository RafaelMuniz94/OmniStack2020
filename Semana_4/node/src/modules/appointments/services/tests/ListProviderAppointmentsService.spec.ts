import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import fakeAppointmentsRepository from "@appointments/repositories/fakes/fakeAppointmentsRepository";
import ListProviderAppointmentsService from "@appointments/services/ListProviderAppointmentsService";
import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";
describe(`ListProviderAppointmentsService`, () => {
  let fakeRepo: fakeAppointmentsRepository;
  let listService: ListProviderAppointmentsService;
  let fakeCacheProvider: FakeCacheProvider;
  beforeEach(() => {
    fakeRepo = new fakeAppointmentsRepository();
    fakeCacheProvider = new FakeCacheProvider();
    listService = new ListProviderAppointmentsService(
      fakeRepo,
      fakeCacheProvider
    );
  });

  it("should be able to list the appointments on a specific day", async () => {
    let appointment1 = await fakeRepo.create({
      date: new Date(2020, 10, 6, 14),
      user_id: "user_id",
      provider_id: "provider_id",
    });

    let appointment2 = await fakeRepo.create({
      date: new Date(2020, 10, 6, 15),
      user_id: "user_id",
      provider_id: "provider_id",
    });

    let appointment3 = await fakeRepo.create({
      date: new Date(2020, 10, 7, 14),
      user_id: "user_id",
      provider_id: "provider",
    });

    let appointment4 = await fakeRepo.create({
      date: new Date(2020, 10, 7, 15),
      user_id: "user_id",
      provider_id: "provider_id",
    });

    let agenda = await listService.execute({
      provider_id: "provider_id",
      day: 6,
      month: 11,
      year: 2020,
    });

    expect(agenda).toEqual(
      expect.arrayContaining([appointment1, appointment2])
    );
  });
});
