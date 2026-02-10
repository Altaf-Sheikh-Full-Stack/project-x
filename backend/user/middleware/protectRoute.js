
const protectRouete = (req, res, next) => {
    const token = req.cookies.token

    if(token){
      next()
    }

    if(!token){
        res.status(400).json({
            message:"you have to login first"
        })
    }
}

export default protectRouete