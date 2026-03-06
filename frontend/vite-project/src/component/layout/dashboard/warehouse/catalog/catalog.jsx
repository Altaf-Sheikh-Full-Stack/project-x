import { useEffect, useState } from 'react'
import './catalog.css'
import DatabaseModel from './model/model'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query';


const WarehouseCompo = (value) => {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState("none")

    const show = () => {
        setOpen("flex")
    }

    const setShow = (data) => {
        setOpen(data)
    }


    const getfile = async () => {
        const res = await fetch('/api/user/get/folder')
        if (!res) {
            throw new Error("Data not found ");
        }
        const data = await res.json()
        console.log(data.file.name)
        return await data.file ?? []
    }

    const deletefile = async (data) => {
        const res = await fetch('/api/user/delete/folder', {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if(!res.ok){
            throw new error("error deleting file")
        }
    }

    const mutation = useMutation({
        mutationKey: ['delete file'],
        mutationFn: deletefile,

        onMutate: async (variables) => {
            await queryClient.cancelQueries({ queryKey: ['get folder'] })

            const previousData = queryClient.getQueryData(['get folder'])

            queryClient.setQueryData(['get folder'], (old = []) =>
                old.filter(file => file.id !== variables.id)
            )

            return { previousData }
        },

        onError: (err, variables, context) => {
            if (context?.previousData) {
                queryClient.setQueryData(['get folder'], context.previousData)
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['get folder'] })
        }
    })

    const submitDeleteFile = (event, id) => {
        event.preventDefault()
        mutation.mutate({ id })
    }




    const { data = [], error, isPending } = useQuery({
        queryKey: ['get folder'],
        queryFn: getfile,
    })


    const getChildFile = () => {
        fetch()
    }

    const getChildMutute = useMutation({
        mutationKey:['getChildComp'],
        mutationFn:getChildFile
    })



    return (
        <div className='wharehouseComp'>
            <DatabaseModel set={open} onClick={setShow} />
            <div className='wharehouseCompTop'>
                <div className='wharehouseCompTopHeading'>
                    <h2>Data warehouse</h2>
                    <p>Lorem ipsum dolor sit amet conset molestias deserunt eaque porro vel minima sint quas ex ab, quaerat alias dolor neque facere impedit voluptatum quibusdam temporibus assumenda?</p>
                </div>
                <div className='wharehouseCompTopButton' onClick={() => show()}>
                    <button>Create database</button>
                </div>
            </div>
            <hr />
            <div className='wharehouseCompSearch'>
                <input type="search" placeholder={value.SearchPlaceholder} />
                <button>Search</button>
            </div>
            <div className='wharehouseDatabase'>
                <p>Database</p>
                <div className='wharehouseDatabaseTable'>
                    {data.map((file) => (
                        <div className='wharehouseDatabaseTableChild'>
                            <p onClick={() => getChild()}>{file.name}</p>
                            <a onClick={() => submitDeleteFile(event, file._id)} href="">Delete</a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WarehouseCompo