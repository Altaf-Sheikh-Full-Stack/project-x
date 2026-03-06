import mongoose from "mongoose";


const fileSchema = mongoose.Schema({
    name: String,
    type: String,
    parent: String,
    user: String
});

export default mongoose.model('fileSchema', fileSchema)