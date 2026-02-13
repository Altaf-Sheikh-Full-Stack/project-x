import registerService from '../../service/authService/register.js'


const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body
        let point = 0
        if (password.length >= 8) {
            const passbartest = [/[0-9]/, /[A-Z]/, /[a-z]/, /[!@#$%&?]/]
            for (let i = 0; i < passbartest.length; i++) {
                if (passbartest[i].test(password)) {
                    point += 1
                }

            }
        } else {
            return res.status(401).json({
                message: "Password length should be min 8 char long",
            });
        }



        console.log(point)

        if (point === 4) {
            const { user, token } = await registerService({
                name,
                email,
                password,
            })

            res.cookie("token", token, {
                httpOnly: true,
                secure: false, 
                sameSite: "lax",
                path: "/"
            })

            return res.status(200).json({
                message: "Registered successfully",
            });
        } else {
            return res.status(400).json({
                message: "password is not strong can't submit the user detail",
            });
        }


    } catch (err) {
        if (err.message === "USER_EXISTS") {
            return res.status(401).json({
                message: "Somting went wrong try login ",
            });
        }
        if (err) {
            console.log(err)
            return res.status(500).json({
                message: "Somthing went wrong",
            });
        }
    }
}

export default registerUser