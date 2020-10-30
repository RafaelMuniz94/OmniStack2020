import "reflect-metadata";
import AppError from "@shared/errors/AppError";
import FindAllUsersService from '@users/services/FindAllUsersService'
import FakeUsersRepository from '@users/repositories/fakes/FakeUsersRepository'
import Users from '@users/infra/Typeorm/entities/Users'

describe('FindAllUsersService',() =>{
    let fakeRepo: FakeUsersRepository
    let findService: FindAllUsersService

    beforeEach(() =>{
        fakeRepo = new FakeUsersRepository()
        findService = new FindAllUsersService(fakeRepo)
    })

    it('should find all users', async () =>{
        let userList: Users[] = []
        for(let i = 0; i < 10; i ++){
            let user = await fakeRepo.create({
                email:`email${i}@email.com`,
                name:`Name${i}`,
                password:`Password${i}`
            })
            userList.push(user)
        }

        let returnedUserList = await  findService.execute()

        expect(returnedUserList.length).toBe(10)
        expect(returnedUserList[1].password).toBeUndefined()
    })
})