import rowFiles from "../../model/rowFiles.js"
import userModel from "../../model/user.js"
import mongoose from "mongoose";
import deleterowfileservice from "../../service/rowfile/delete.js";

const deleterowfile = async (req, res) => {
    try{
        const { id, userid } = req.body
        await deleterowfileservice(id, userid)
    }catch(err){
        if (err.message) {
            res.status(404).json({
                message: "user not found"
            })
        }
    }
}


export default deleterowfile