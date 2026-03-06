import { useEffect, useState } from 'react'
import './errorblock.css'

const ErrorBlock = (error) => {
    const [model, setModel] = useState("")



    useEffect(() => {
        if (error.description) {
            setModel("block")
        }else{
            setModel("none")
        }
    },[error])



    const close = () => {
        setModel("none")
    }




    return (
        <div style={{ display: model }} className="errorBlock">
            <button onClick={close}>Close</button>
            <h4>{error.heading}</h4>
            <p >{error.description}</p>
        </div>
    )
}


export default ErrorBlock