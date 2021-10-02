import { Repository, getCustomRepository } from 'typeorm';
import { Connection } from "../entities/Connection"
import { ConnectionRepository } from '../repositories/ConnectionRepository';

interface IConnectionCreate{
    admin_id?: string,
    socket_id: string,
    user_id: string,
    id?:string
}

class ConnectionsService{
    private connectionsRepository : Repository<Connection>
     
    constructor(){
        this.connectionsRepository = getCustomRepository(ConnectionRepository)
    }
    async  create({ admin_id,socket_id,user_id,id}: IConnectionCreate){
        const connection = this.connectionsRepository.create({
            admin_id,
            socket_id,
            user_id,
            id
        })
        this.connectionsRepository.save(connection)
        return connection
    }

    async list(){
        const connections = await this.connectionsRepository.find()

        return connections
    }

    async findByUserId(user_id:string){
        const connection = await this.connectionsRepository.findOne({user_id})

        return connection
    }
    async clear(){
        await this.connectionsRepository.clear();
    }
}

export {ConnectionsService}