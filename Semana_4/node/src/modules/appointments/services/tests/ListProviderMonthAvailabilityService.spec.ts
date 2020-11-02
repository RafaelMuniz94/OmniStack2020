import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import fakeAppointmentsRepository from "@appointments/repositories/fakes/fakeAppointmentsRepository";
import ListProviderMonthAvailabilityService from "@appointments/services/ListProviderMonthAvailabilityService";

describe("ListProviderMonthAvailability", () => {
  let listAvailability: ListProviderMonthAvailabilityService;

  let appointmentRepo: fakeAppointmentsRepository;

  beforeEach(() => {
    appointmentRepo = new fakeAppointmentsRepository();
    listAvailability = new ListProviderMonthAvailabilityService(appointmentRepo);
  });

  it("should be able to list the month availability from provider", async () => {


    for(let i = 8; i < 18; i ++){
      await appointmentRepo.create({
        date: new Date(2020, 7, 10, i, 0, 0),
        user_id:"3123",
        provider_id: "user",
      });  
    }


    await appointmentRepo.create({
      date: new Date(2020, 7, 11, 10, 0, 0),
      user_id:"3123",
      provider_id: "user",
    });

    await appointmentRepo.create({
      date: new Date(2020, 8, 10, 8, 0, 0),
      user_id:"3123",
      provider_id: "user",
    });

    await appointmentRepo.create({
      date: new Date(2020, 9, 10, 8, 0, 0),
      user_id:"3123",
      provider_id: "user",
    });

    let availability = await listAvailability.execute({
      month: 8,
      year: 2020,
      provider_id: "user",
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 10, available: false },
        { day: 11, available: true },
        { day: 19, available: true },
        { day: 12, available: true },
      ])
    );
  });
});
