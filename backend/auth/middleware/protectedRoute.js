import express from 'express'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'


var app = express()
app.use(cookieParser())

const protectRoute = (req, res, next) => {
    try {

        const token = req.cookies.AuthToken

        if (!token) {
            return next()
        }






        if (token) {
            const decode = jwt.verify(token, process.env.JWT_KEY)
            if (decode.verified === false) {
                res.status(400).json({
                    message: "You already login but email is not verified",
                })

            }

            if (decode.verified === true) {
                return res.status(200).json({
                    message: "You already login and the email is verified"
                })
            }
        }


        if (req.path === '/verify') {
            return next();
        }

        if (req.path === '/verifying') {
            return next();
        }

        if (req.path === '/exp') {
            return next();
        }
    } catch (err) {
        console.log(err)
    }

}

export default protectRoute