import userModel from '../../model/user.js'
import bcrypt from 'bcrypt'
import genrateToken from '../../util/gerateToken.js'


const loginService = async ({ email, password }) => {
    const user = await userModel.findOne({ email })
    if (!user) {
        throw new Error("email not found")
    }
    const passwordFound = await bcrypt.compare(password, user.password)
    if (!passwordFound) {
        throw new Error("password not found")
    }
    
    const token = genrateToken(user)
    return {token}
}

export default loginService