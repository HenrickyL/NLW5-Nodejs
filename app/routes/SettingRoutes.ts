import {Router} from 'express'
import { SettingController } from '../controllers/SettingController'
import { SettingsService } from '../services/SettingsService'

/* Tipos de parametros
* Params - params rotas (localhost:333/1)
* Query - filtros e buscas (localhost:333/1?search=algumacoisa)
* Body - Inserções e json
*/

const routes = Router()

const settingController = new SettingController()

routes.get('/settings',settingController.list)

routes.post('/settings',settingController.create)

export default routes
////////////////////////////////////////////////////////////////
// export default  (app:Router)=>{
//     app.get('/settings',async (req,res)=>res.send('no ar'))

//     app.post('/settings',async (req,res)=>{
//         const {chat,username} = req.body

//         const settingRepository = getCustomRepository(SettingRepository)
//         //criar representação
//         const settings=settingRepository.create({
//             chat,
//             username
//         })
//         //salvar obs
//         await settingRepository.save(settings)

//         return res.status(200).json(settings)
//     })
// }