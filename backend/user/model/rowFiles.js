import mongoose from "mongoose";

const rowFilesSchems = mongoose.Schema({
    userId:String,
    fileName: String
})  


export default mongoose.model("rowFiles", rowFilesSchems)