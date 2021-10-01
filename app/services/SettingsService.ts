import { getCustomRepository } from 'typeorm';
import { SettingRepository } from "../repositories/SettingRepository"

interface ISettingsCreate{
    chat: boolean,
    username: string
}


class SettingsService {
    async create( {chat,username}: ISettingsCreate) {
        //criar representação
        const settingRepository = getCustomRepository(SettingRepository)

        const userAlreadyExists = await settingRepository.findOne({username})
        if(userAlreadyExists){
            throw new Error('User already exists!')
        }

        const settings= settingRepository.create({
            chat,
            username
        })
        //salvar obj
        await settingRepository.save(settings)

        return settings
    }

    async list( ) {
        const settingRepository = getCustomRepository(SettingRepository)
        const settings = await settingRepository.find()
        return settings
    }
    



}

export {SettingsService}