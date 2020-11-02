import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import fakeAppointmentsRepository from "@appointments/repositories/fakes/fakeAppointmentsRepository";
import ListProviderDayAvailabilityService from "@appointments/services/ListProviderDayAvailabilityService";

describe("ListProviderDayAvailability", () => {
  let listAvailability: ListProviderDayAvailabilityService;

  let appointmentRepo: fakeAppointmentsRepository;

  beforeEach(() => {
    appointmentRepo = new fakeAppointmentsRepository();
    listAvailability = new ListProviderDayAvailabilityService(appointmentRepo);
  });

  it("should be able to list the Day availability from provider", async () => {
    for (let i = 8; i < 12; i++) {
      await appointmentRepo.create({
        date: new Date(2020, 7, 10, i, 0, 0),
        user_id:"3123",
        provider_id: "user",
      });
    }

    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 7, 10, 10).getTime(); // Setando a data para 10 de agosto as 11 horas
    });

    let availability = await listAvailability.execute({
      day: 10,
      month: 8,
      year: 2020,
      provider_id: "user",
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 10, available: false },
        { hour: 8, available: false },
        { hour: 13, available: true },
      ])
    );
  });
});
