import { useState } from "react";



const usePasswordValidator = () => {
    const [crossLen, setCrossLen] = useState("")
    const [crossUppercase, setCrossUppercase] = useState("")
    const [crossLowercase, setCrossLowercase] = useState("")
    const [crossNumber, setCrossNumber] = useState("")
    const [crossSpecial, setCrossSpecial] = useState("")
    const [numpoint, setNumPoint] = useState(0)
    const validatePassword = (e) => {


        let point = 0
        if (e.target.value.length >= 8) {
            const passbartest = [/[0-9]/, /[A-Z]/, /[a-z]/, /[!@#$%&?]/]
            for (let i = 0; i < passbartest.length; i++) {
                if (passbartest[i].test(e.target.value)) {
                    point += 1
                    setNumPoint(point)
                }

            }
        }



        const valueWithoutSpace = e.target.value.replace(/\s/g, "");
        if (valueWithoutSpace.length >= 8) {
            setCrossLen("line-through")

        } else {
            setCrossLen("none")
        }

        if (e.target.value.match(/[A-Z]/)) {
            setCrossUppercase("line-through")
        } else {
            setCrossUppercase("none")
        }
        if (e.target.value.match(/[a-z]/)) {
            setCrossLowercase("line-through")
        } else {
            setCrossLowercase("none")
        }
        if (e.target.value.match(/[0-9]/)) {
            setCrossNumber("line-through")
        } else {
            setCrossNumber("none")
        }
        if (e.target.value.match(/[!@#$%&?]/)) {
            setCrossSpecial("line-through")
        } else {
            setCrossSpecial("none")
        }
    }

    return {numpoint, crossLen, crossLowercase, crossSpecial, crossUppercase, crossNumber, validatePassword }
}

export default usePasswordValidator