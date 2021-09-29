import express from 'express'
import SettingRoutes from '../app/routes/SettingRoutes'
//... tipagens separadas
const port  = 3333

interface Options{
    port: String | Number
}

export default (options : Options)=>{
    const app = express()
    //settings
    app.set("port",options.port)
    app.use(express.json())
    app.use(express.urlencoded({ extended : true }))
    app.use(express.static('./public'))
    
    
    
    // Endpoints
    app.use(SettingRoutes)



    // 
    app.listen(options.port,()=>
        console.log(`Server is running on port ${port}`)
    )

    return app
}