import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';


interface IUserCreate{
    email:string
}

class UserService{
    async create({email}:IUserCreate){
        const userRepository = getCustomRepository(UserRepository)
        //ifexists
        const userAlreadyExists = await userRepository.findOne({email})
        if(userAlreadyExists){
            throw new Error('User already Exists!')
        }

        const user = userRepository.create({email})

        await userRepository.save(user)
        return user
    }

    async list(){
        const userRepository = getCustomRepository(UserRepository)
        const users = await userRepository.find();
        if(!users)
            throw new Error("No registered user!")
        return users

    }

    
}


export {UserService}