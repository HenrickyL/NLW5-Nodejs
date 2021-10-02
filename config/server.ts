import express from 'express'
import settingRoutes from '../app/routes/SettingRoutes'
import userRouters from '../app/routes/UserRouters'
import messageRoute from '../app/routes/MessageRoutes'
import connectionRoute from '../app/routes/ConnectionsRoutes'

import {Server,Socket} from 'socket.io'
import {createServer} from 'http'
import path from 'path'
import clientSeckts from '../app/websocket/client'
import { UserService } from '../app/services/UserService'
import { SettingsService } from '../app/services/SettingsService'
import { MessagesService } from '../app/services/MessagesService'
import { ConnectionsService } from '../app/services/ConnectionService'

//... tipagens separadas


const app = express()
const http = createServer(app)

const io = new Server(http)


{//settings
    // app.set("port",options.port)
    app.use(express.json())
    app.use(express.urlencoded({ extended : true }))
    app.use(express.static(path.join(__dirname, "..",'public')))
    app.set("views",path.join(__dirname, "..",'public') )
    app.engine('html',require('ejs').renderFile)
    app.set('view engine','html')

}

app.get('/', (req,res)=>{
    return res.render('html/client.html')
})


app.get('/clearall', async(req,res)=>{
    try{
        const setService = await (new SettingsService()).clear()
        const connService = await (new ConnectionsService()).clear()
        const messService =await ( new MessagesService()).clear()
        const userService = await (new UserService()).clear()
        return res.send('[ClearAll] ok')
    }catch(err){
        return res.status(400).send('[ClearAll] err:\n'+err.message)

    }
})
    

{// Endpoints
app.use(settingRoutes)
app.use(userRouters)
app.use(messageRoute)
app.use(connectionRoute)

}

{//socket.io
    io.on('connection',(socket : Socket)=>{
        console.log(`[IO] ${socket.id} se conectou!`)
    })

}

const port= process.env.port || 3333

http.listen(port,()=>{

    console.log(`Server is running on port ${port}`)
})



clientSeckts(io)
    

export {http, io}
