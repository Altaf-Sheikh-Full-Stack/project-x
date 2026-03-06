import Navbar from "../../layout/navbar/navbar"
import Register from '../../layout/auth/register/register'
import App from "../../../App"
const RegisterPage = () => {
    App()
    return (
        <>
            <Navbar />
            <Register/>
        </>
    )
}

export default RegisterPage