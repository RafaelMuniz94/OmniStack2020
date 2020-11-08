// test('sum two numbers', () =>{
//     expect(1+2).toBe(3)// usada em todos o testes
// })
import fakeAppointmentsRepository from "../../repositories/fakes/fakeAppointmentsRepository";
import CreateAppointmentService from "../CreateAppointmentService";
import FakeNotificationRepository from "@notifications/services/fake/FakeNotificationRepository";
import AppError from "@shared/errors/AppError";

describe("CreateAppointment", () => {
  let fakeRepository: fakeAppointmentsRepository;
  let createService: CreateAppointmentService;
  let fakeNotification: FakeNotificationRepository;
  beforeEach(() => {
    fakeRepository = new fakeAppointmentsRepository();
    fakeNotification = new FakeNotificationRepository();
    createService = new CreateAppointmentService(
      fakeRepository,
      fakeNotification
    );
  });
  //test('Create an appointment',) ou
  it("should be able to create a new appointment", async () => {
    jest.spyOn(Date, "now").mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });
    let appointment = await createService.execute({
      parsedDate: new Date(2020, 5, 10, 13),
      user_id: "123654",
      provider_id: "123345654",
    });

    expect(appointment).toHaveProperty("id");
    expect(appointment.user_id).toBe("123654");
    expect(appointment.provider_id).toBe("123345654");
  });

  it(`should not be able to create two appointments on the same time`, async () => {
    let date = new Date(2020, 5, 10, 12);

    jest.spyOn(Date, `now`).mockImplementation(() => {
      return new Date(2020, 5, 10, 11).getTime();
    });

    await createService.execute({
      parsedDate: date,
      user_id: "3123",
      provider_id: "123345654",
    });

    await expect(
      createService.execute({
        parsedDate: date,
        user_id: "3123",
        provider_id: "123345654",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create an appointment on a past date", async () => {
    jest.spyOn(Date, `now`).mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });

    let date = new Date(2020, 5, 10, 11);

    await expect(
      createService.execute({
        parsedDate: date,
        user_id: "3123",
        provider_id: "123345654",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create an appointment to same user as provider", async () => {
    let date = new Date(2020, 11, 10, 11);

    await expect(
      createService.execute({
        parsedDate: date,
        user_id: "3123",
        provider_id: "3123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create an appointment before 8am", async () => {
    let date = new Date(2020, 11, 10, 7);

    await expect(
      createService.execute({
        parsedDate: date,
        user_id: "user_id",
        provider_id: "3123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to create an appointment after 5pm", async () => {
    let date = new Date(2020, 11, 10, 18);

    await expect(
      createService.execute({
        parsedDate: date,
        user_id: "user_id",
        provider_id: "3123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
}); // Para manter os testes organizados
