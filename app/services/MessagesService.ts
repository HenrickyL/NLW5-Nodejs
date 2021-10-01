import { getCustomRepository } from 'typeorm';
import { MessageRepository } from '../repositories/MessageRepository';

interface IMessageCreate{
    admin_id:string | null,
    text:string,
    user_id:string
}

class MessagesService{
    async create( { admin_id,text,user_id}: IMessageCreate){
        const messagesRepository = getCustomRepository(MessageRepository)


        const message = messagesRepository.create({
            admin_id,
            text,
            user_id
        })
        await messagesRepository.save(message)
        return message
    }

    async list(){
        const messagesRepository = getCustomRepository(MessageRepository)
        const messages = await messagesRepository.find()
        return messages
    }
}

export {MessagesService}