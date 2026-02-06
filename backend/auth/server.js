import express from "express"
import dotenv from "dotenv"
import "./config/mongodbConnect.js"
const app = express()
dotenv.config()
import authRoute from './route/authRoute/authRoute.js'
app.use(express.json())
app.use(express.urlencoded({ extended: true }))





app.use('/', authRoute)


const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is runninin at ${port}`)
})







