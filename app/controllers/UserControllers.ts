import {Request,Response} from 'express'
import { UserService } from '../services/UserService';

class UserController{
    public async create(req:Request, res:Response): Promise<Response>{
        const {email} = req.body;
        const userService = new UserService();
        try{
            const user =await userService.create({email});
            return res.status(200).json(user)
        }catch(err){
            return res.status(400).json({message:err.message})
        }
    }

    async list(req:Request, res:Response): Promise<Response>{
        
        const userService = new UserService()
        try{
            const users = await userService.list()
            return res.status(200).json(users)
        }catch(err){
            return res.status(400).json({message:err.message})
        }
        
    }
}

export {UserController}