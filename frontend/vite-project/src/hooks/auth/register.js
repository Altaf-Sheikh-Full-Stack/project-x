import { useMutation } from "@tanstack/react-query";
import register from "../../api/auth/register";
import { useState } from "react";

const useRegister = (navigate) => {
    const [error, setError] = useState()
     const mutation = useMutation({
        mutationFn: register,

        onSuccess: (data) => {
            console.log(data.message)
            navigate("/verifyEmail")
        },

        onError: (error) => {
            setError(error.message)
            console.log(error.message)
        }
    })

    return { mutation, error }
}

export default useRegister