import jwt from 'jsonwebtoken'
import getrowfileservice from "../../service/rowfile/get.js"
const getrowfile = async (req, res) => {
    try {
        const tokens = req.cookies.token
        if(!tokens){
            throw new Error("Token not found");
            
        }
        const decode = jwt.verify(tokens, process.env.JWT_KEY)
        const rowfile = await getrowfileservice(decode)
        if (200) {
            res.status(200).json({
                rowfile
            })
        }
    } catch (error) {
        console.log(error)
    }



}

export default getrowfile