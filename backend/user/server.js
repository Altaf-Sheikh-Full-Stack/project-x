import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import route from './route/userRoute.js'
import protectRouete from "./middleware/protectRoute.js"
import db from './config/dbConnect.js'

dotenv.config()
const app = express()
app.set("trust proxy", 1);
app.use(express.json())   
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use("/",protectRouete , route)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
