import deleteFileService from "../../service/filesystem/delete.js"


const deleteFileController = async (req, res) => {
    try {
        const { id } = req.body
        console.log(id)
        await deleteFileService(id)

        res.status(200).json({
            messgae: "file deleted"
        })
    } catch (err) {
        res.status(200).json({
            messgae: "cant delete file"
        })
    }


}

export default deleteFileController