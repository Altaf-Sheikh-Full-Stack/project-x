import { useMutation } from "@tanstack/react-query"
import login from "../../api/auth/login"
import { useNavigate } from "react-router"



const useLogin = () => {
    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn:login,

        onSuccess:() => {
            navigate("/verifyEmail")
        }
    })

    return mutation
}

export default useLogin