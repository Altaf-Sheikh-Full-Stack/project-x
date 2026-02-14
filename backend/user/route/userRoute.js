import express from 'express'
const route = express.Router()
import uploadController from '../controller/upload.js'
import getRowFileController from '../controller/rowfile/get.js'
import deleterowfileController from '../controller/rowfile/delete.js'

route.post('/upload', uploadController)
route.delete('/delete/rowfile', deleterowfileController)
route.get('/get/rowfile', getRowFileController)



export default route