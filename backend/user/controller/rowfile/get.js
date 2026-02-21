import jwt from 'jsonwebtoken'
import getRowFileService from "../../service/rowfile/get.js"
const getRowFile = async (req, res) => {
    try {
        const tokens = req.cookies.AuthToken
        if(!tokens){
            throw new Error("Token not found");
            
        }
        const decode = jwt.verify(tokens, process.env.JWT_KEY)
        const rowfile = await getRowFileService(decode)
        if (200) {
            res.status(200).json({
                rowfile
            })
        }
    } catch (error) {
        console.log(error)
    }



}

export default getRowFile