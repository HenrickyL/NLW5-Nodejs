import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { Setting } from '../entities/Setting';
import { SettingRepository } from "../repositories/SettingRepository"

interface ISettingsCreate{
    chat: boolean,
    username: string
}


class SettingsService {
    private settingRepository: Repository<Setting>

    constructor(){
        this.settingRepository = getCustomRepository(SettingRepository)
    }


    async create( {chat,username}: ISettingsCreate) {
        //criar representação

        const userAlreadyExists = await this.settingRepository.findOne({username})
        if(userAlreadyExists){
            throw new Error('User already exists!')
        }

        const settings= this.settingRepository.create({
            chat,
            username
        })
        //salvar obj
        await this.settingRepository.save(settings)

        return settings
    }

    async list( ) {
        const settings = await this.settingRepository.find()
        return settings
    }
    



}

export {SettingsService}