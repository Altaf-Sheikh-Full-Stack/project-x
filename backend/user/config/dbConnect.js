import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const mongodb = process.env.MONGODB_URI

if (mongodb) {
    mongoose.connect(`${mongodb}`)
        .then(() => {
            console.log("connected to the database")
        }).catch((err) => {
            console.log(err)
            process.exit(1);
        })
} else {
    console.log("mongodb env file is missing")
}


export default  mongoose.connection