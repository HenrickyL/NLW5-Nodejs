import {Request,Response} from 'express'
import { SettingsService } from '../services/SettingsService'


class SettingController{
    async create(req:Request,res:Response):Promise<Response>{
        
        const {chat,username} = req.body
        
        const settingsService = new SettingsService()
        try {
            const setting = await settingsService.create({chat,username})
            return res.status(200).json(setting)
            
        } catch (error) {
            return res.status(400).json({message: error.message})
            
        }
        
    }

    async list(req:Request,res:Response):Promise<Response>{
        const settingsService = new SettingsService()
        const settings = await settingsService.list()
        return res.status(200).json(settings)

    
    
    }
    

    
}

export {SettingController}