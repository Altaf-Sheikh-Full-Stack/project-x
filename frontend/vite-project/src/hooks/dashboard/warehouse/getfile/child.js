import { useMutation } from "@tanstack/react-query"
import getChildFile from "../../../../api/dashboard/warehouse/getfile/child"



const useGetChildFile = () => {
    const mutation = useMutation({
        mutationFn:getChildFile
    })

    return mutation
}

export default useGetChildFile