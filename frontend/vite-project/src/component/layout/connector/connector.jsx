import { useState } from 'react'
import './connector.css'
import { useQuery } from '@tanstack/react-query'

const Connector = (value) => {
    const getrowfile = async () => {
        const response = await fetch('/api/user/get/rowfile')
        if (!response.ok) {
            throw new Error("Failed to fetch data")
        }
        const json = await response.json()
        return json.rowfile ?? []
    }


    const { data = [], isPending, error } = useQuery({ 
        queryKey: ['fileName'], 
        queryFn: getrowfile, 
    })
    
    const deleteItem = (id) => {
        console.log(id)
        fetch('/api/user/delete/rowfile', {
            method:"DELETE",
            body: id
        })
    }

    return (
        <div className='connectorComp'>
            <div className='connectorCompTop'>
                <div className='connectorCompTopHeading'>
                    <h2>Data Connectors</h2>
                    <p>Connect and upload all your data at one place</p>
                </div>
                <div className='connectorCompTopButton'>
                    <button onClick={value.onClick}>Upload data</button>
                </div>
            </div>
            <hr />
            <div className='connectorCompSearch'>
                <input type="search" placeholder="Search data" />
                <button>Search</button>
            </div>

            <div className='connectorDatabase'>
                {error && <p>Somthing went wrong can't get data try after some time</p>}
                {isPending && <p>Loding</p>}
                {data.length === 0 && <p>No data found</p>}
                <div className='connectorDatabaseTable'>
                    {data.map(file => (
                        <div key={file._id} className='connectorDatabaseTableChild'>
                            <p >{file.fileName}</p>
                            <a onClick={() => deleteItem(file._id)} >Delete</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Connector