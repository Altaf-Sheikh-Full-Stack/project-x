import './model.css'
import ButtonPrimary from '../../common/button/primary'
import ButtonSecondary from '../../common/button/secondary'
import { useState, useEffect } from 'react'
import ErrorBlock from '../../common/errorblock/errorblock'
const Model = (value) => {
    const [error, setError] = useState("")
    const [model, setModel] = useState()

    useEffect(() => {
        setModel(value.state)
    }, [value.state])
    const close = () => {
        setModel("none")
        value.onClick("none")
    }


    const uploadFile = async (e) => {
        e.preventDefault()
        const res = await fetch("/api/user/upload", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fileName: e.target.files[0].name,
            })
        })

        const { url } = await res.json()
        if (!url) {
            console.log(url.message)
            setError(url.message)
        }
        const response = await fetch(url, {
            method: "PUT",
            body: e.target.files[0],
            headers: {
                "Content-Type": "csv"
            }
        })

        if (response.ok) {
            close()
            console.log("file submitted sucessfully")
            window.location.reload();
        }

        if (!response.ok) {
            setError("error submitting file")
            console.log("error submitting file")
        }


    }

    return (
        <form className='model' style={{ display: model }} onChange={uploadFile} >
            {error && <ErrorBlock error={error} />}
            <div className='modelCard'>
                <div className='modelCardTop'>
                    <h3>Upload file</h3>
                    <div onClick={close} >
                        <ButtonPrimary type={"button"} buttonPrimary={"close"} />
                    </div>
                </div>
                <hr />
                <label htmlFor="myfile" className='myfileLable'>
                    Drag and drop or click to &nbsp; <b> upload fille</b>
                </label>
                <input name='myfile' type="file" accept='.csv' id='myfile' hidden />
            </div>
        </form>
    )
}


export default Model