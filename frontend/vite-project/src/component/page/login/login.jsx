import Navbar from "../../layout/navbar/navbar"
import Login from "../../layout/auth/login/login"
import App from "../../../App"
const LoginPage = () => {
    App()
    return (
        <>
            <Navbar />
            <Login/>
        </>
    )
}

export default LoginPage