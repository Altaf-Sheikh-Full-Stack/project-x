import './login.css'
import Input from '../../../common/input/input'
import ButtonPrimary from '../../../common/button/primary'
import { NavLink } from 'react-router'
const Login = () => {
    const sendLoginData = async (e) => {
        e.preventDefault();
        try {
            const url = "/api/auth/login"
            const loginDataToServer = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                }),
            })

            const data = await loginDataToServer.json()

            if(loginDataToServer.ok){
                console.log("find the user")
            }else{
                console.log(data.message)
            }
        } catch (err) {
            // console.log(err)
        }

    }
    return (
        <div className="loginTop">
            <form className="loginForm" onSubmit={sendLoginData}>
                <h2>Login to your accoute</h2>
                <Input name={"email"} type={'email'} placeholder={"Enter email"} required={"required"} />
                <Input name={"password"} type={'password'} placeholder={"Enter password"} required={"required"} />
                <ButtonPrimary buttonPrimary={"Login"} type={"submit"} />
                <p>Don't have a account? <NavLink to={'/register'} >
                     create an account
                </NavLink> </p>
                <p>Forgot password? <a href="">Reset now</a></p>
            </form>

        </div>
    )
}

export default Login