import Input from "../../../common/input/input"
import ButtonPrimary from "../../../common/button/primary"
import { NavLink } from "react-router"

const Register = () => {
    const sendRegisterData = async (e) => {
        e.preventDefault();
        fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                check: e.target.check.checked
            }),
        })
    }
    return (
        <div className="loginTop">
            <h2>Create new account</h2>
            <p>All filed is required</p>
            <form className="loginForm" onSubmit={sendRegisterData}>
                <Input name={"name"} type={'text'} placeholder={"Enter name"} />
                <Input name={"email"} type={'email'} placeholder={"Enter email"} />
                <Input name={"password"} type={'password'} placeholder={"Enter password"} />
                <div className="chekbox">
                    <Input name={"check"} type={'checkbox'} placeholder={"Enter email"} />
                    <p>Remember me</p>
                </div>

                <ButtonPrimary buttonPrimary={"Create account"} />
            </form>
            <NavLink to={'/login'}>
                already have a account? Login
            </NavLink>
        </div>
    )
}

export default Register