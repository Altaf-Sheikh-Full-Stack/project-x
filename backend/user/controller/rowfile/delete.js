import deleteRowFileService from "../../service/rowfile/delete.js";

const deleteRowFileController = async (req, res) => {
    try{
        const {id} = req.body
        await deleteRowFileService(id)
    }catch(err){
        if (err.message) {
            res.status(404).json({
                message: "user not found"
            })
        }
    }
}


export default deleteRowFileController