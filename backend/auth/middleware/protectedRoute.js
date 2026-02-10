import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import userModel from '../model/user.js'

var app = express()
app.use(cookieParser())

const protectRoute = (req, res, next) => {
    try {

        
        const token = req.cookies.token

        if(!token){
            next()
        }
        if (token) {
            const decode = jwt.verify(token, process.env.JWT_KEY)
            if(decode.verified === false){
                res.status(400).json({
                    message:"You already login but email is not verified"
                })
            }
            if (decode.verified === true) {
                res.status(200).json({
                    message:"You already login and the email is verified"
                })
            }
        }
    } catch (err) {
        console.log(err)
    }

}

export default protectRoute