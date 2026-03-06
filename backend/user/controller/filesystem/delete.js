import deleteFileService from "../../service/filesystem/delete.js"


const deleteFileController = async (req, res) => {
    const { id } = req.body
    console.log(id)
    await deleteFileService(id)

    res.status(200).json({
        messgae:"file deleted"
    })
}

export default deleteFileController