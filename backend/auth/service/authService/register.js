import userModel from '../../model/user.js'
import bcrypt from 'bcrypt'
import genrateToken from "../../util/gerateToken.js"



const registerService = async ({name, email, password}) => {
    const existingUser = await userModel.findOne({email})
    if(existingUser){
        throw new Error("USER_EXISTS")
    }
    

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)


    const user = await userModel.create({
        name,
        email,
        password:hashPassword,
        verified:true
    });

    const token = genrateToken(user)
    return {user, token}
}

export default registerService
