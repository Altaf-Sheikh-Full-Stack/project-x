import Input from "../../../../../common/input/input"
import ButtonPrimary from "../../../../../common/button/primary"
import { useEffect, useState } from "react"
import './model.css'
import ButtonSecondary from "../../../../../common/button/secondary"
const DatabaseModel = (value) => {
    
    const DatatoServer = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)
        fetch('/api/user/database', {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                formValues
            }) 
        })
    }
    const [show, setShow] = useState("none")
    useEffect(() => {
        setShow(value.set)
    }, [value])

    const showdata = () => {
        setShow('none')
        value.onClick("none")
    }

    return (
        <div className="DatabaseModel" style={{ display: show }}>
            <div className="DatabaseModelContent">
                <div className="DatabaseModelContentTop">
                    <h2>Create database</h2>
                    <div className="DatabaseModelContentTopButton" onClick={() => showdata()}>
                        <ButtonSecondary buttonSecondary={"Close"} />
                    </div>
                </div>

                <form className="DatabaseModelContentBottom" onSubmit={DatatoServer}>
                    <Input name={"name"} placeholder={"enter database name"} />
                    <ButtonPrimary buttonPrimary={"Send"} />
                </form>

            </div>
        </div>
    )
}

export default DatabaseModel