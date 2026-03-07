import Input from "../../../common/input/input"
import ButtonPrimary from "../../../common/button/primary"
import { Navigate, NavLink, useNavigate } from "react-router"
import { useEffect, useState } from "react"
import ErrorBlock from "../../../common/errorblock/errorblock"
import './register.css'
import eye from './img/eye.svg'
import eyeClose from './img/eye-slash.svg'
import useRegister from "../../../../hooks/auth/register"
import usePasswordValidator from "./validation/passwordValidation"
import useNameValidation from "./validation/nameValidation"
const Register = () => {

    const [error, setError] = useState()
    const { numpoint, crossLen, crossLowercase, crossSpecial, crossUppercase, crossNumber, validatePassword } = usePasswordValidator()
    const { validateName, nameError } = useNameValidation()


    useEffect(() => {
        setError(nameError)
    }, [nameError])


    const [checkEye, setCheckEye] = useState(eye)
    const [passwordType, setPasswordType] = useState("password")


    const navigate = useNavigate()


    const eyeCloseOpen = () => {
        if (checkEye === eye) {
            setCheckEye(eyeClose)
            setPasswordType("text")
        } else {
            setCheckEye(eye)
            setPasswordType("password")
        }
    }



    const { mutation, } = useRegister(navigate)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (numpoint === 4 && e.target.name.value.length < 12) {
            const formData = new FormData(e.currentTarget)
            const formValues = Object.fromEntries(formData)
            mutation.mutate(formValues)
        } else {
            console.log("come up with all point")
        }

    }





    return (
        <div className="loginTop">
            <ErrorBlock description={error} />
            <form className="loginForm" onSubmit={handleSubmit}>
                <div>
                    <h2 style={{ marginBottom: 0 }}>Create an account</h2>
                    <p>All filed is required*</p>
                </div>
                <Input name={"name"} onChange={validateName} type={'text'} placeholder={"Enter name"} required={"required"} />
                <Input name={"email"} type={'email'} placeholder={"Enter email"} required={"required"} />
                <div className="passdiv">
                    <Input name={"password"} onChange={validatePassword} type={passwordType} placeholder={"Enter password"} required={"required"} />
                    <img className="openEye" onClick={eyeCloseOpen} src={checkEye} alt="" />
                </div>
                <span className="passwordRequirement">
                    <h4 >Your Password must contain</h4>
                    <p style={{ textDecoration: crossLen }}>At least 8 character</p>
                    <p style={{ textDecoration: crossUppercase }}>At least 1 uppercase character</p>
                    <p style={{ textDecoration: crossLowercase }}>At least 1 lowercase character</p>
                    <p style={{ textDecoration: crossNumber }}>At least 1 number</p>
                    <p style={{ textDecoration: crossSpecial }}>At least 1 speacial character - ! @ # $ % & ? </p>
                </span>
                <ButtonPrimary buttonPrimary={mutation.isPending ? "Creating..." : "Create Account"} />
                <p>already have a account? <NavLink to={'/login'}>
                    Login
                </NavLink></p>
                <p>By clicking the submit buttion you are agring we out privicy policay and term and condition</p>
            </form>
        </div>
    )
}

export default Register