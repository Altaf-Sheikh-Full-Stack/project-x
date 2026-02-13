import mongoose from "mongoose";

const rowFilesSchems = mongoose.Schema({
    userid:String,
    fileName: String
})  


export default mongoose.model("rowFiles", rowFilesSchems)