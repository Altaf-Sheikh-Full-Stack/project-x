import { useMutation } from "@tanstack/react-query"
import getChildFile from "../../../../api/dashboard/warehouse/getfile/child"



const useGetChildFile = () => {
    const getChidMutation = useMutation({
        mutationFn:getChildFile
    })

    return getChidMutation
}

export default useGetChildFile