import express from "express"
import dotenv from "dotenv"
import protectRoute from './middleware/protectedRoute.js'
import "./config/mongodbConnect.js"
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
import authRoute from './route/authRoute/authRoute.js'



app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())





app.use('/', protectRoute, authRoute)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is runninin at ${port}`)
})







