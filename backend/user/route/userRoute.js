import express from 'express'
const route = express.Router()
import uploadController from '../controller/upload.js'
import getRowFileController from '../controller/rowfile/get.js'

route.post('/upload', uploadController)
// route.post('/delete/rowfile', getRowFileController)
route.get('/get/rowfile', getRowFileController)



export default route