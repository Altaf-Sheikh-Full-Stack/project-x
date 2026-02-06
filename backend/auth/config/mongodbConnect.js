import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()  


    
const mongodb = process.env.MONGODB_URI
if (!mongodb) {
    console.log("mongodb url is missing")
} else {
    mongoose
        .connect(mongodb)
        .then(() => {
            console.log("connect to database")
        })
        .catch((err) => {
            console.log(err)
            process.exit(1);
        })
}


export default  mongoose.connection