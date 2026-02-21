import express from 'express'
const route = express.Router()
import deleteRowFileController from '../controller/rowfile/delete.js'
import uploadController from '../controller/rowfile/upload.js'
import getRowFileController from '../controller/rowfile/get.js'
import databaseConroller from '../controller/database/database.js'


route.post('/upload', uploadController)
route.delete('/delete/rowfile', deleteRowFileController)
route.get('/get/rowfile', getRowFileController)
route.post('/database', databaseConroller)



export default route