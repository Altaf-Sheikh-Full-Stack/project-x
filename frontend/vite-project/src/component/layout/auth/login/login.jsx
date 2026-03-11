import './login.css'
import Input from '../../../common/input/input'
import ButtonPrimary from '../../../common/button/primary'
import { NavLink } from 'react-router'
import useLogin from '../../../../hooks/auth/login'

const Login = () => {

    const mutation = useLogin()

    const sendLoginData = (e) => {
        e.preventDefault();
        const formDats = new FormData(e.currentTarget)
        const formValues = Object.fromEntries(formDats)
        mutation.mutate(formValues)

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