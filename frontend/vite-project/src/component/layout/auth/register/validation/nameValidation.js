import { useState } from "react"




const useNameValidation = () => {

    const [nameError, setNameError] = useState()
    let bool
    const validateName = (e) => {
        let inputLenght = e.target.value.length
        if (inputLenght >= 12) {
            console.log("Only 12 character allowed including spaces")
            setNameError("Only 12 character allowed including spaces")
            bool = false
        } else {
            bool = true
            setNameError("")
        }
    }

    return { validateName, nameError }
}

export default useNameValidation