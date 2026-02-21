import jwt from 'jsonwebtoken'


const protectRouete = (req, res, next) => {


  const token = req.cookies.AuthToken

  if (token) {
    const decode = jwt.verify(token, process.env.JWT_KEY)
    if (decode.verified == true) {
      next()
    } else {
      return res.status(400).json({
        message: "you need to verify your account"
      })
    }
  }

  if (!token) {
    return res.status(400).json({
      message: "No account found, create an acoount or login"
    })
  }
}

export default protectRouete