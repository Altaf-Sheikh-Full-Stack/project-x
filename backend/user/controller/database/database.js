import databaseService from "../../service/database/database.js"
import jwt from 'jsonwebtoken'

const databaseConroller = async (req, res) => {
    try {
        const { name } = req.body.formValues
        const token = req.cookies.AuthToken
        const decode = jwt.verify(token, process.env.JWT_KEY)
        await databaseService(name, decode)
    }catch(err){
        console.log(err)
    }
    
}

export default databaseConroller