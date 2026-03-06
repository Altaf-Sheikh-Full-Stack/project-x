import {  Routes, Route, } from 'react-router'
import Home from '../component/page/home/home'
import LoginPage from '../component/page/login/login'
import RegisterPage from '../component/page/register/register'
import VerifyEmail from '../component/page/emailVerify/send'
import Verify from '../component/layout/email/verify/verify'
import Schema from '../component/layout/email/schema/schema'
const AuthRoute = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/verifyEmail' element={<VerifyEmail />} />
            <Route path='/emailVerify/:id' element={<Verify />} />
            <Route path='/schema' element={<Schema/>}/>
        </Routes>

    )


}

export default AuthRoute