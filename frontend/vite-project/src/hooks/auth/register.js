import { useMutation } from "@tanstack/react-query";
import register from "../../api/auth/register";

const useRegister = (navigate) => {
    return useMutation({
        mutationFn: register,

        onSuccess: (data) => {
            console.log(data.message)
            navigate("/verifyEmail")
        },

        onError: (error) => {
            console.log(error.message)
        }
    })
}

export default useRegister