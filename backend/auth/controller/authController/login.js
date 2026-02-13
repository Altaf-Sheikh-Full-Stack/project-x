import loginService from "../../service/authService/login.js";



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const { token } = await loginService({
            email,
            password
        })
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            path: "/"
        })
        res.status(200).json({
            message: "User found",
        });
    } catch (err) {
        if (err.message === "email not found" || err.message === "password not found") {
            res.status(401).json({
                message: "email or password is wrong"
            })
        }
    }
}

export default loginUser