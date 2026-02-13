import Input from "../../../common/input/input"
import ButtonPrimary from "../../../common/button/primary"
import { NavLink } from "react-router"
import { useState } from "react"
import ErrorBlock from "../../../common/errorblock/errorblock"
import './register.css'
import eye from './img/eye.svg'
import eyeClose from './img/eye-slash.svg'
import App from "../../../../App";
const Register = () => {
    App()
    const [crossLen, setCrossLen] = useState("")
    const [crossUppercase, setCrossUppercase] = useState("")
    const [crossLowercase, setCrossLowercase] = useState("")
    const [crossNumber, setCrossNumber] = useState("")
    const [crossSpecial, setCrossSpecial] = useState("")
    const [errorDescription, setErrorDescription] = useState("")
    const [errorHeaders, setErrorHeaders] = useState("")
    const [passwordBarWidth, setPasswordBarWidth] = useState("")
    const [passwordBarColor, setPasswordBarColor] = useState("")
    const [passwordMessage, setPasswordMessage] = useState("not a password")
    const [checkEye, setCheckEye] = useState(eye)
    const [passwordType, setPasswordType] = useState("password")
    const [numpoint, setNumPoint] = useState(0)



    let bool
    const nameCount = (e) => {
        let inputLenght = e.target.value.length
        if (inputLenght >= 12) {
            console.log("Only 12 character allowed including spaces")
            setErrorDescription("Only 12 character allowed including spaces")
            setErrorHeaders("Error in name field")
            bool = false
        } else {
            setErrorDescription("")
            setErrorHeaders("")
            bool = true
        }
    }


    const passwordreq = (e) => {
        const passwordStringMessage = ["not a password", "weakest", "weaker", "weak", "considerable",]
        const passwordSecurityBarWidth = ["1%", "25%", "50%", "75%", "100%"];
        const passwordSecurityBarColor = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

        let point = 0
        if (e.target.value.length >= 8) {
            const passbartest = [/[0-9]/, /[A-Z]/, /[a-z]/, /[!@#$%&?]/]
            for (let i = 0; i < passbartest.length; i++) {
                if (passbartest[i].test(e.target.value)) {
                    point += 1
                    setNumPoint(point)
                }

            }
        }

        setPasswordBarWidth(passwordSecurityBarWidth[point])
        setPasswordBarColor(passwordSecurityBarColor[point])
        setPasswordMessage(passwordStringMessage[point])

        const valueWithoutSpace = e.target.value.replace(/\s/g, "");
        if (valueWithoutSpace.length >= 8) {
            setCrossLen("line-through")

        } else {
            setCrossLen("none")
        }

        if (e.target.value.match(/[A-Z]/)) {
            setCrossUppercase("line-through")
        } else {
            setCrossUppercase("none")
        }
        if (e.target.value.match(/[a-z]/)) {
            setCrossLowercase("line-through")
        } else {
            setCrossLowercase("none")
        }
        if (e.target.value.match(/[0-9]/)) {
            setCrossNumber("line-through")
        } else {
            setCrossNumber("none")
        }
        if (e.target.value.match(/[!@#$%&?]/)) {
            setCrossSpecial("line-through")
        } else {
            setCrossSpecial("none")
        }


    }

    const eyeCloseOpen = () => {
        if (checkEye === eye) {
            setCheckEye(eyeClose)
            setPasswordType("text")
        } else {
            setCheckEye(eye)
            setPasswordType("password")
        }
    }


    const sendRegisterData = async (e) => {
        e.preventDefault();
        if (numpoint === 4 && e.target.name.value.length < 12) {
            try {

                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: e.target.name.value,
                        email: e.target.email.value,
                        password: e.target.password.value,
                    }),
                })

                const data = await res.json()
                if (!res.ok) {
                    console.log(await data.message)
                    setErrorHeaders("")
                    setErrorDescription(data.message)
                    return
                }

                console.log("SUCCESS:", data.message);

                window.location.reload();

            } catch (err) {
                console.log(err)
            }
        } else {
            console.log("come up with all point")
        }


    }
    return (

        <div className="loginTop">
            <ErrorBlock heading={errorHeaders} description={errorDescription} />
            <form className="loginForm" onSubmit={sendRegisterData}>
                <div>
                    <h2 style={{ marginBottom: 0 }}>Create an account</h2>
                    <p >All filed is required*</p>
                </div>

                <Input name={"name"} onChange={nameCount} type={'text'} placeholder={"Enter name"} required={"required"} />
                <Input name={"email"} type={'email'} placeholder={"Enter email"} required={"required"} />
                <div className="passdiv">
                    <Input name={"password"} onChange={passwordreq} type={passwordType} placeholder={"Enter password"} required={"required"} />
                    <img className="openEye" onClick={eyeCloseOpen} src={checkEye} alt="" />
                </div>
                <div>
                    <div className="passwordSecurityBar">
                        <div style={{ backgroundColor: passwordBarColor, width: passwordBarWidth }} className="passwordSecurityBarChild"></div>
                    </div>
                    <p style={{ fontSize: 14 }}>{passwordMessage}</p>
                </div>

                <span className="passwordRequirement">
                    <h4 >Password requirement</h4>
                    <p style={{ textDecoration: crossLen }}>Password min length should be 8</p>
                    <p style={{ textDecoration: crossUppercase }}>Password should containe uppercase A-Z</p>
                    <p style={{ textDecoration: crossLowercase }}>Password should containe lowercase a-z</p>
                    <p style={{ textDecoration: crossNumber }}>Password should containe number 1-9</p>
                    <p style={{ textDecoration: crossSpecial }}>Password should containe speacial character !  @  #  $  %  &  ? </p>
                </span>
                <ButtonPrimary buttonPrimary={"Create account"} />
                <p>already have a account? <NavLink to={'/login'}>
                    Login
                </NavLink></p>
                <p>By clicking the submit buttion you are agring we out privicy policay and term and condition</p>
            </form>


        </div>
    )
}

export default Register