import registerService from '../../service/authService/register.js'

const registerUser = async (req, res) =>{
    try{
        const {name, email, password} = req.body
        const {token} = await registerService({
            name,
            email,
            password
        })

        console.log(name, email, password)

        res.cookie("token", token)
        res.send("user created")
    }catch(err){
        if (err.message === "USER_EXISTS") {
            return res.status(401).send("user already exist")
        }
        if (err) {
            console.log(err)
            res.status(500).send("somting went wrong")
            
        }
        
        
    }
}

export default registerUser