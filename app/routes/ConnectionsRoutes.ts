import {Router} from 'express'
import {ConnectionsController} from '../controllers/ConnectionsController'

const router = Router()

const connectionController = new ConnectionsController()

router.get('/connections',connectionController.list)




export default router