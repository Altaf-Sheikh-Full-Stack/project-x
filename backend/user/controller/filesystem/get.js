import getFileService from "../../service/filesystem/get.js"
import jwt from 'jsonwebtoken'

const getFileController = async (req, res) => {
    try {
        let { id } = req.body


        if (typeof (id) === "object" || id === undefined) {
            id = "null"
        }

        console.log("this is what i want " + id)
        const token = req.cookies.AuthToken
        const decode = jwt.verify(token, process.env.JWT_KEY)
        const file = await getFileService(decode.id, id)
        res.status(200).json({
            file
        })
    } catch (err) {
        console.log(err)
    }

}

export default getFileController