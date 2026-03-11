import loginService from "../../service/authService/login.js";



const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const { token } = await loginService({
            email,
            password
        })
        res.cookie("AuthToken", token)
         res.status(200).json({
            message: "Login successfully",
        });


    } catch (err) {
        if (err.message === "email not found" || err.message === "password not found") {
            res.status(401).json({
                message: "email or password is wrong"
            })
        }

        console.log(err)
    }
}

export default loginUser