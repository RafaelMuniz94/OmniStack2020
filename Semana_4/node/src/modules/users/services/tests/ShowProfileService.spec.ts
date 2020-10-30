import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import ShowProfileService from "@users/services/ShowProfileService";

import FakeUsersRepository from "@users/repositories/fakes/FakeUsersRepository";

describe("ShowProfile", () => {
  let fakeRepo: FakeUsersRepository;
  let showProfile: ShowProfileService;

  beforeEach(() => {
    fakeRepo = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeRepo);
  });

  it("should return a profile from an existing user", async () => {
    let user = await fakeRepo.create({
      name: "User",
      email: "email@user.com",
      password: "123654",
    });

    let profile = await showProfile.execute({ user_id: user.id });

    expect(profile.email).toBe(user.email);
    expect(profile.name).toBe(user.name);
    expect(profile.id).toBe(user.id);
  });

  it("should not return a profile from a non signed user", async () => {
    await expect(
      showProfile.execute({
        user_id: "non-existing-user-id",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
