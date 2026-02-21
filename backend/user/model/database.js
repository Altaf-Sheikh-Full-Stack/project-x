import mongoose from "mongoose";

const databaseSchems = mongoose.Schema({
    userId: String,
    databaseName: String,
    table:Array
})  


export default mongoose.model("database", databaseSchems)