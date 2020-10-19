// test('sum two numbers', () =>{
//     expect(1+2).toBe(3)// usada em todos o testes
// })
import fakeAppointmentsRepository from "../repositories/fakes/fakeAppointmentsRepository";
import CreateAppointmentService from "./CreateAppointmentService";
import AppError from '@shared/errors/AppError'

describe("CreateAppointment", () => {
  //test('Create an appointment',) ou
  it("should be able to create a new appointment", async () => {
    let fakeRepository = new fakeAppointmentsRepository();
    let createService = new CreateAppointmentService(fakeRepository);

    let appointment = await createService.execute({
      parsedDate: new Date(),
      provider_id: "123345654",
    });

    expect(appointment).toHaveProperty("id");
    expect(appointment.provider_id).toBe("123345654");
  });

  it(`should not be able to create two appointments on the same time`, async () => {
    let fakeRepository = new fakeAppointmentsRepository();
    let createService = new CreateAppointmentService(fakeRepository);

    let date = new Date();

    await createService.execute({
      parsedDate: date,
      provider_id: "123345654",
    });

    expect(
       createService.execute({
        parsedDate: date,
        provider_id: "123345654",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
}); // Para manter os testes organizados
