import loginUser from '../../controller/authController/login.js'
import registerUser from '../../controller/authController/register.js'
import emailService from '../../controller/verifyEmail/send.js'
import verifying from '../../controller/verifyEmail/verify.js'
import createSchema from '../../trino/schema.js'
import express from 'express'
const router  = express.Router()


router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/verify', emailService)
router.post('/verifying', verifying)
router.post('/exp', createSchema)


export default router