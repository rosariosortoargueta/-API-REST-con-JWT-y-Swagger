import 'dotenv/config'
import express from 'express'
import userRouter from "./routers/users.routes.js"
import {apikeyMiddleware} from './middleware/apikey.middleware.js'

// CREAR INSTANCIA 
const app = express()
const PORT = process.env.PORT || 8000

// ESPECIFICAR JSON
app.use(express.json());

//MIDDLEWARE
app.use(apikeyMiddleware)

//endpoint
app.use("/", userRouter)

// CREAR EL SERVER
app.listen(PORT, () => {
    console.log(`Server running in ${PORT} 🚀🚀🚀`);
})
