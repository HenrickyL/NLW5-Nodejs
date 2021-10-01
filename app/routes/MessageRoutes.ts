import {Router} from 'express'
import { MessagesController } from '../controllers/MessagesController'

const router = Router()

const messagesController = new MessagesController()

router.get('/messages',messagesController.list)

router.post('/messages',messagesController.create)


export default router