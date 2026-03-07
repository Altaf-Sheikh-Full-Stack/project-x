import { useMutation } from "@tanstack/react-query"
import login from "../../api/auth/login"



const useLogin = () => {
    return useMutation({
        mutationFn:login,

        onSuccess:() => {
            
        }
    })
}

export default useLogin