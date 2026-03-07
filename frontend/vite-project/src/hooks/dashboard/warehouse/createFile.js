import { useMutation } from "@tanstack/react-query";
import getFile from "../../../api/dashboard/warehouse/createFile";
import { useState } from "react";


const useCreateFile = () => {
    const [hide, setHide] = useState()

    const mutation = useMutation({
        mutationFn: getFile,


        onSuccess: () => {
            setHide("none")
        }
    })

    

    return {mutation, hide}
}

export default useCreateFile