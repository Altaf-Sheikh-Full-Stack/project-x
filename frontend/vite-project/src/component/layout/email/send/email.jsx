import './email.css'
import { useState } from 'react'
import ErrorBlock from '../../../common/errorblock/errorblock'
import EmailButton from './button'
const Email = () => {
    const [error, setError] = useState("")
    const [data, setData] = useState()
    const [email, setEmail] = useState()

    const handleData = (sendData) => {
        setData(sendData)
    }

    const handleError = (data) => {
        setError(data)
    }

    const handleEmail = (data) => {
        setEmail(data)
    }

    return (
        <>
            <ErrorBlock description={error} />
            <div className="emailCard">
                <h2>Please verify your email address</h2>
                <h3>You're almost there! We’ve sent a verification email to {email ? email : "loading"}</h3>
                <p>Please check your inbox and click the verification link to complete your sign-up. If you don’t see the email, check your spam or junk folder.</p>
                <EmailButton Email={handleEmail} sendError={handleError} sendData={handleData} />
                <p style={{ color: "green" }}>{data}</p>
            </div>
        </>
    )
}

export default Email