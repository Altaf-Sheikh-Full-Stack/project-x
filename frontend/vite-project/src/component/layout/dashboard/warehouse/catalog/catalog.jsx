import { useEffect, useState } from 'react'
import './catalog.css'
import DatabaseModel from './model/model'
import useGetParentFile from '../../../../../hooks/dashboard/warehouse/getfile/parent';
import useDeleteParentFile from '../../../../../hooks/dashboard/warehouse/deletefile/parent';
import useGetChildFile from '../../../../../hooks/dashboard/warehouse/getfile/child';
import { useNavigate, useParams } from 'react-router';
const WarehouseCompo = (value) => {

    const navigate = useNavigate()

    const param = useParams()



    const getChidMutation = useGetChildFile()
    const mutation = useDeleteParentFile()
    const { data } = useGetParentFile()


    const [open, setOpen] = useState("none")

    const show = () => {
        setOpen("flex")
    }

    const setShow = (data) => {
        setOpen(data)
    }




    const submitDeleteFile = (event, id) => {
        event.preventDefault()
        mutation.mutate(id)
    }


    const getChidFile = (id) => {
        navigate(`/warehouse/${id}`)
        getChidMutation.mutate(id)
    }

    useEffect(() => {
        getChidMutation.mutate(param.id)
    }, [])




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
                            <p onClick={() => getChidFile(file._id)}>{file.name}</p>
                            <a onClick={() => submitDeleteFile(event, file._id)} href="">Delete</a>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default WarehouseCompo