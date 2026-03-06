import ButtonPrimary from "../../../common/button/primary"
import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
const EmailButton = (value) => {
    const [time, setTime] = useState(0)


    useEffect(() => {
        if (time <= 0) return
        const timerId = setInterval(() => setTime(time - 1), 1000)
        return () => clearInterval(timerId)

    }, [time])

    if (time === 0) {
        setTime(null)
    }

    const sendEmail = async () => {
        if (!time) {
            const res = await fetch('/api/auth/verify', {
                method: 'POST',
                credentials: 'include',
            })

            const data = await res.json()

            value.Email(data.email)

            if (!res.ok) {
                throw new Error(data.message)
            }

            return data
        } else {
            value.sendError("Email can't be sent, wait for the timer")
            throw new Error("Email can't be sent, wait for the timer");
        }

    }


    const mutation = useMutation({

        mutationFn: sendEmail,


        onSuccess: (data) => {
            setTime(30)
            value.sendData("Email Sent")
            console.log(data)
        },

        onError: (data) => {
            value.sendError(data.message)
            console.log(data.message)
        }
    })



    useEffect(() => {
        mutation.mutate()
    }, [])

    return (
        <div onClick={() => mutation.mutate()}>
            <ButtonPrimary buttonPrimary={!time ? mutation.isPending ? "Sending..." : "Resend Email" : `Resend in ${time}`} />
        </div>
    )

}


export default EmailButton