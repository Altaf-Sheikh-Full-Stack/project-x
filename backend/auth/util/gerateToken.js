import jwt from 'jsonwebtoken'
const genrateToken = (user) => {
    return jwt.sign({
        email: user.email, id: user._id, verified: user.verified
    }, process.env.JWT_KEY)
}

export default genrateToken