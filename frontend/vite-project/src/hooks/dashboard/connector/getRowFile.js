import {  useQuery } from "@tanstack/react-query"
import getRowFile from "../../../api/dashboard/connector/getRowFile"



const useRowFile =  () => {
    const { data = [], isPending, error } = useQuery({
        queryKey: ['rowfile'],
        queryFn: getRowFile,
    })

    return { data, isPending, error}
}



export default useRowFile