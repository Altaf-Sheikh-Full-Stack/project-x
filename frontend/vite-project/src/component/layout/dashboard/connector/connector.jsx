import { useEffect, useState } from 'react'
import './connector.css'
// import { useMutation, useQuery } from '@tanstack/react-query'
import ButtonPrimary from '../../../common/button/primary'
import Loading from '../loading/loading'
import Notfound from '../notfound/notfound'
import useRowFile from '../../../../hooks/dashboard/connector/getRowFile'
import useDeleteRowFile from '../../../../hooks/dashboard/connector/deleteRowFile'
const Connector = (value) => {

    const { data, isPending, error } = useRowFile()
    const  mutation  = useDeleteRowFile()


        
        
    

    return (
        <div className='connectorComp'>
            <div className='connectorCompTop'>
                <div className='connectorCompTopHeading'>
                    <h2>Data Connectors</h2>
                    <p>Connect and upload all your data at one place</p>
                </div>
                <div className='connectorCompTopButton'>
                    <div onClick={value.onClick}>
                        <ButtonPrimary buttonPrimary={"Upload file"} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='connectorCompSearch'>
                <input type="search" placeholder="Search data" />
                <button>Search</button>
            </div>

            <div className='connectorDatabase'>
                {error && <p>Somthing went wrong can't get data try after some time</p>}
                {isPending && <Loading />}

                {!isPending && data.length === 0 && <Notfound value={'No file found click upload file button(at the top right) to upload file and get started'} />}
                <div className='connectorDatabaseTable'>
                    {data.map(file => (
                        <div key={file._id} className='connectorDatabaseTableChild'>
                            <p>{file.fileName} </p>
                            <a onClick={() => mutation.mutate(file._id)} >Delete</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Connector