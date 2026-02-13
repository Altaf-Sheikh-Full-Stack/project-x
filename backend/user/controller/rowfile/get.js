import userModel from "../../model/user.js"
import rowFiles from "../../model/rowFiles.js"
import jwt from 'jsonwebtoken'
const getrowfile = async (req, res) => {
    const tokens = req.cookies.token
    const decode = jwt.verify(tokens, process.env.JWT_KEY)
    const rowfile = await rowFiles.find({userid:decode.id})
   
    res.status(200).json({
        rowfile
    })
    
}

export default getrowfile