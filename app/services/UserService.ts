import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';


interface IUserCreate{
    email:string
}

class UserService{
    private userRepository : Repository<User>

    constructor(){
        this.userRepository= getCustomRepository(UserRepository)
    }

    async create({email}:IUserCreate){
        //ifexists
        const userAlreadyExists = await this.userRepository.findOne({email})
        if(userAlreadyExists){
            throw new Error('User already Exists!')
        }

        const user = this.userRepository.create({email})

        await this.userRepository.save(user)
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