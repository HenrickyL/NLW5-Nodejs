import express from './config/server'
import db from './config/database'

const options = {
    port: process.env.port || 3333
}


const app = express(options)
const connection = db()


