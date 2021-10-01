import { Request,Response} from 'express'
import { MessagesService } from '../services/MessagesService'

class MessagesController {
    async create( req: Request, res:Response):Promise<Response>{
        const messagesService = new MessagesService()
        const  {admin_id, text, user_id} = req.body
        const message = await messagesService.create({admin_id, text, user_id})
        
        return res.status(200).json(message)
    }

    async list(req: Request, res:Response):Promise<Response>{
        const messagesService = new MessagesService()

        const messages = await messagesService.list();

        return res.status(200).json(messages)
        

    }
}


export {MessagesController}