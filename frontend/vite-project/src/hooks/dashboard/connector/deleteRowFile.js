import { useMutation, useQueryClient } from "@tanstack/react-query"
import deleteRowFile from "../../../api/dashboard/connector/deleteRowFile"



const useDeleteRowFile = (value) => {
      const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: deleteRowFile,


        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: ['rowfile'] })

            const previousData = queryClient.getQueryData(['rowfile'])

            queryClient.setQueryData(['rowfile'], (old = []) =>
                old.filter(file => file.id !== variables.id)
            )

            return { previousData }
        },

        onError: (err, variables, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(['rowfile'], context.previousData)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['rowfile'] })
        }
    })




    return mutation
}

export default useDeleteRowFile