import {Router} from 'express'
import { SettingsService } from '../services/SettingsService'

/* Tipos de parametros
* Params - params rotas (localhost:333/1)
* Query - filtros e buscas (localhost:333/1?search=algumacoisa)
* Body - Inserções e json
*/

const routes = Router()

routes.get('/settings',async (req,res)=>res.send('no ar'))

routes.post('/settings',async (req,res)=>{
    const {chat,username} = req.body
    
    const settingsService = new SettingsService()
    try {
        const setting = await settingsService.create({chat,username})
        return res.status(200).json(setting)
        
    } catch (error) {
        return res.status(400).json({message: error.message})
        
    }

})

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