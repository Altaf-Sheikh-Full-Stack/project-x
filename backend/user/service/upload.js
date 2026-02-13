import rowFiles from "../model/rowFiles.js"
import userModel from '../model/user.js'
const rowFileUploadServiec = async (fileName, decode) => {


    const rowfile = await rowFiles.create({
        fileName,
        userid: decode.id

    })

    const user = await userModel.findOne({_id: decode.id})
    user.rowfilelist.push(rowfile._id)
    user.save();
}


export default rowFileUploadServiec