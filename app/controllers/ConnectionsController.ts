import { Request,Response} from 'express'
import { ConnectionsService } from '../services/ConnectionService';


class ConnectionsController {
    
    async list(req: Request, res:Response):Promise<Response>{
        const connectionService = new ConnectionsService()
        const connections = await connectionService.list();

        return res.status(200).json(connections)
        

    }

}


export {ConnectionsController}