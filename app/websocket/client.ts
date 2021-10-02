import {Server} from 'socket.io'
import { getConnection } from 'typeorm'
import { ConnectionsService } from '../services/ConnectionService'
import { MessagesService } from '../services/MessagesService'
import { UserService } from '../services/UserService'







const clientSeckts = (io:Server)=>{
    
    
    io.on('connect',(socket)=>{
        const socket_id = socket.id;
        const connectionService = new ConnectionsService()
        const userService = new UserService()
        const messageService = new MessagesService()



        socket.on('cli_first_access',async (params)=>{
            const { text,email} = params
            let user_id = null
            const userExists = await userService.findByEmail(email);

            if(!userExists){
                const user = await userService.create({email})
                user_id = user.id
            }else{
                user_id = userExists.id               
            }

            const connectExists = await connectionService.findByUserId(user_id)
            if(!connectExists){
                await connectionService.create({
                    socket_id,
                    user_id,
                    
                })
            }else{
                connectExists.socket_id = socket_id;
                await connectionService.create(connectExists)
            }



            await messageService.create({
                text,
                user_id
            })
            console.log('[IO] connection has ben created')
            
        })
    })

}




export default clientSeckts
