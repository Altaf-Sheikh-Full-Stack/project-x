const express = require('express')
const app = express()
require('dotenv').config()


app.get('/dashboard', (req, res)=>{
    res.send("User")
    console.log("User")
})

const port = process.env.PORT

if(port){
    console.log("User, server is ")
    app.listen(port)
}else{

}
