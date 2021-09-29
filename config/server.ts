import express from 'express'
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
    app.get('/',(req,res)=>{
        return res.status(200).json({message:"Olá NLW5"})
    })

    app.post('/users',(req,res)=>{
        return res.status(200).json({message:"user salvo com sucesso!"})

    })




    // 
    app.listen(options.port,()=>
        console.log(`Server is running on port ${port}`)
    )

    return app
}