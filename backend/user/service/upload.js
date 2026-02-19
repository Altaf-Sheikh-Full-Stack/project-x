import mongoose from "mongoose"
import rowFiles from "../model/rowFiles.js"
import userModel from '../model/user.js'
const rowFileUploadServiec = async (fileName, decode) => {
    const session = await mongoose.startSession();

    await session.withTransaction(async () => {
        const user = await userModel.findOne({ _id: decode.id }).session(session)
        if (!user) {
            throw new Error("USER_NOT_FOUND");
        }
        const rowfile = await rowFiles.create(
            [
            {
                fileName,
                userid: decode.id,
            }], { session })

        user.rowfilelist.push(rowfile._id)
        await user.save({ session });
    })

    session.endSession()
}


export default rowFileUploadServiec