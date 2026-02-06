import './login.css'
import Input from '../../../common/input/input'
import ButtonPrimary from '../../../common/button/primary'
import { NavLink } from 'react-router'
const Login = () => {
    const sendLoginData = async (e) => {
        e.preventDefault();
        try {
            const url = "/api/auth/login"
            const loginDataToServer = fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: e.target.email.value,
                    password: e.target.password.value,
                    check: e.target.check.checked
                }),
            })
        }catch (err){
            console.log(err)
        }
        
    }
    return (
        <div className="loginTop">
            <h2>Login to your accoute</h2>
            <form className="loginForm" onSubmit={sendLoginData}>
                <Input name={"email"} type={'email'} placeholder={"Enter email"} required={"required"} />
                <Input name={"password"} type={'password'} placeholder={"Enter password"} required={"required"} />
                <div className="chekbox">
                    <Input name={"check"} type={'checkbox'} />
                    <p>Remember me</p>
                </div>
                <ButtonPrimary buttonPrimary={"Login"} type={"submit"} />
            </form>
            <NavLink to={'/register'} >
                Don't have a account? create an account
            </NavLink>

            <p>Forgot password? <a href="">Reset now</a></p>
        </div>
    )
}

export default Login