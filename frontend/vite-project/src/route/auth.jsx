import {  Routes, Route, } from 'react-router'
import Home from '../component/page/home/home'
import LoginPage from '../component/page/login/login'
import RegisterPage from '../component/page/register/register'
import EmailVerify from '../component/page/emailVerify/emailVerify'

const AuthRoute = () => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/emailVerify' element={<EmailVerify />} />
        </Routes>

    )


}

export default AuthRoute