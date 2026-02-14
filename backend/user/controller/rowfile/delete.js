import rowFiles from "../../model/rowFiles.js"

const deleterowfile = async (req, res) => {
    const { id } = req.body

    const deletedoc = await rowFiles.findOneAndDelete({ _id: id })
    if (deletedoc) {
        res.status(200).json({
            messgae: "Document deleted"
        })
    } else {
        res.status(404).json({
            messgae: "Can't find document to delete"
        })
    }

}


export default deleterowfile