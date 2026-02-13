import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    verified: Boolean,
    rowfilelist:Array
})


export default mongoose.model('user', userSchema)