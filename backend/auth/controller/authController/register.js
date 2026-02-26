import registerService from '../../service/authService/register.js'
import registerValidator from '../../validator/register.js';
const registerUser = async (req, res) => {
    try {

        const name = req?.body?.name
        const email = req?.body?.email
        const password = req?.body?.password

        await registerValidator(name, email, password)

        const { token } = await registerService({
            name,
            email,
            password,
        })


        res.cookie("AuthToken", token)

        return res.status(200).json({
            message: "Registered successfully",
        });



    } catch (err) {


        if (err.message === "NAME_UNDEFINED") {
            return res.status(401).json({
                message: "Please enter your name",
            });
        }


        if (err.message === "NAME_IS_MORE_THAN_MAX_LIMIT") {
            return res.status(401).json({
                message: "Name length should not be more then 8 char",
            });
        }


        if (err.message === "EMAIL_UNDEFINED") {
            return res.status(401).json({
                message: "Please enter your email",
            });
        }

        
        if (err.message === "PASSWORD_UNDEFINED") {
            return res.status(401).json({
                message: "Please enter password",
            });
        }


        if (err.message === "PASSWORD_MIN_LENGTH_SHOULD_BE_MORE_THEN_8_CHAR") {
            return res.status(401).json({
                message: "Password min lenght should be more then 8 char",
            });
        }


        if (err.message === "PASSWORD_NOT_STRONG") {
            return res.status(401).json({
                message: "Password should containe at least one A-Z, 0-9, a-z and !@#$%&?",
            });
        }




        if (err.message === "USER_EXISTS") {
            return res.status(401).json({
                message: "The email you are trying to create an account with is suspended, blacklisted, or invalid. Please try creating an account with a different email address.",
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