// import loginController from '../..w/controller/authController/login.js'
import registerController from '../../controller/authController/register.js'
import express from 'express'
const router  = express.Router()


router.post('/register', registerController)
// router.get('/login', loginController)


export default router