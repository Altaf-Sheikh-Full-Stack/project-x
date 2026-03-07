import Input from "../../../../../common/input/input"
import ButtonPrimary from "../../../../../common/button/primary"
import { useEffect, useState } from "react"
import './model.css'
import ButtonSecondary from "../../../../../common/button/secondary"
import { useParams } from "react-router"
import useCreateFile from "../../../../../../hooks/dashboard/warehouse/createFile"
const DatabaseModel = (value) => {
    const param = useParams()

    const { mutation, hide } = useCreateFile()


    const submitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.append("type", "folder")

        if (Object.keys(param).length === 0) {
            console.log(param)
            formData.append("parent", null)
        } else {
            formData.append("parent", param.id)
        }
        const formValues = Object.fromEntries(formData)
        console.log(formValues)
        mutation.mutate(formValues)
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

                <form className="DatabaseModelContentBottom" onSubmit={submitForm}>
                    <Input name={"name"} placeholder={"enter database name"} />
                    <ButtonPrimary buttonPrimary={"Send"} />
                </form>

            </div>
        </div>
    )
}

export default DatabaseModel