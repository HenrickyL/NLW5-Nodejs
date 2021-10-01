import {Router} from 'express'
import { UserController } from '../controllers/UserControllers'

/* Tipos de parametros
* Params - params rotas (localhost:333/1)
* Query - filtros e buscas (localhost:333/1?search=algumacoisa)
* Body - Inserções e json
*/

const routes = Router()
const userController = new UserController()


routes.get('/users',userController.list)

routes.post('/users', userController.create)

export default routes
