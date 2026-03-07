import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteParentFile from "../../../../api/dashboard/warehouse/deletefile/parent";



const useDeleteParentFile = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteParentFile,


        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: ['getParentData'] })

            const previousData = queryClient.getQueryData(['getParentData'])

            queryClient.setQueryData(['getParentData'], (old = []) =>
                old.filter(file => file.id !== variables.id)
            )

            return { previousData }
        },

        onError: (err, variables, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(['getParentData'], context.previousData)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['getParentData'] })
        }
    })




    return mutation
}


export default useDeleteParentFile