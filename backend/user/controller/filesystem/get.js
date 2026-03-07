import getFileService from "../../service/filesystem/get.js"
import jwt from 'jsonwebtoken'

const getFileController = async (req, res) => {
    try {
        const token = req.cookies.AuthToken
        const decode = jwt.verify(token, process.env.JWT_KEY)
        const file = await getFileService(decode.id)
        res.status(200).json({
            file
        })
    }catch(err){
        console.log(err)
    }
   
}

export default getFileController