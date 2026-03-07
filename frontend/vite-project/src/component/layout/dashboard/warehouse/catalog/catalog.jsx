import { useState } from 'react'
import './catalog.css'
import DatabaseModel from './model/model'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router';
import useGetParentFile from '../../../../../hooks/dashboard/warehouse/getfile/parent';
import useDeleteParentFile from '../../../../../hooks/dashboard/warehouse/deletefile/parent';
const WarehouseCompo = (value) => {
    
    const mutation = useDeleteParentFile()
    const {data, error, isPending} = useGetParentFile()

    const navigate = useNavigate()

    const param = useParams()

   
    const [open, setOpen] = useState("none")

    const show = () => {
        setOpen("flex")
    }

    const setShow = (data) => {
        setOpen(data)
    }




    const submitDeleteFile = (event, id) => {
        event.preventDefault()
        mutation.mutate( id )
    }





    if(Object.keys(param).length === 0){
        console.log("no parem")
    }else{
        console.log("parem")
    }

    const getChildFile = async (id) => {
        navigate(`/warehouse/${id}`)
        const res = await fetch('/api/user/get/folder/child', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({param})
        })

        const data = await res.json()
        console.log(data)
        if(!res.ok){
            throw new Error(data.message);
        }

        return data
    }

    const getChildMutute = useMutation({
        mutationKey: ['getChildComp'],
        mutationFn: getChildFile
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
                <p></p>
                <div className='wharehouseDatabaseTable'>
                    {data.map((file) => (
                        <div className='wharehouseDatabaseTableChild'>
                            <p onClick={() => getChildFile(file._id)}>{file.name}</p>
                            <a onClick={() => submitDeleteFile(event, file._id)} href="">Delete</a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WarehouseCompo