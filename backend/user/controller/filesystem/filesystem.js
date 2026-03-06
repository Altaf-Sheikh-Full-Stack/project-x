import fileSystemService from "../../service/filesystem/filesystem.js"
import jwt from 'jsonwebtoken'


const fileSystem = async (req, res) => {
    const { name, type, parent} = req.body
    const token = req.cookies.AuthToken
    const decode = jwt.verify(token, process.env.JWT_KEY)


    await fileSystemService(name, type, parent, decode.id)

    res.status(200).json({
        messgae:"file created"
    })
}

export default fileSystem