const express = require('express')
const app = express()
import cookieParser from 'cookie-parser'
require('dotenv').config()
app.use(cookieParser())


app.get('/', )

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is runnung at ${port}`)
})