import { useMutation, useQuery } from "@tanstack/react-query"
import getParentFile from "../../../../api/dashboard/warehouse/getfile/parent"



const useGetParentFile = () => {
    const {data = [], error, isPending} = useQuery({
        queryKey: ['getParentData'],
        queryFn:getParentFile
    })
   
    return {data, error, isPending}
}

export default useGetParentFile