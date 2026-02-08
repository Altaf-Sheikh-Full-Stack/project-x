import registerService from '../../service/authService/register.js'

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const { token } = await registerService({
            name,
            email,
            password
        })
        res.cookie("token", token)
        res.status(200).json({
                message: "Registered successfully",
            });
    } catch (err) {
        if (err.message === "USER_EXISTS") {
            res.status(401).json({
                message: "Somting went wrong try login ",
            });
        }
        if (err) {
            console.log(err)
            res.status(500).json({
                message: "Somthing went wrong",
            });
        }
    }
}

export default registerUser