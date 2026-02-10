import loginUser from '../../controller/authController/login.js'
import registerUser from '../../controller/authController/register.js'
import express from 'express'
const router  = express.Router()


router.post('/register', registerUser)
router.post('/login', loginUser)


export default router