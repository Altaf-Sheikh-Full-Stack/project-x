import jwt from 'jsonwebtoken'
import userModel from '../../model/user.js';
import genrateToken from '../../util/gerateToken.js';


const verifying = async (req, res) => {
  try {
    const decoded = jwt.verify(req.body.id, process.env.JWT_KEY);
    await userModel.findOneAndUpdate(
      { _id: decoded.id },
      { $set: { verified: true } }
    );

    const user = await userModel.findOne({ _id: decoded.id })

    const token = await genrateToken(user)

    res.cookie("AuthToken", token)

    res.status(200).json({
      message: "Email verified",
    })

  } catch (err) {
    res.status(404).json({
      message: "somting went wrong"
    })
  }
}


export default verifying