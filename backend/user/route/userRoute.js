import express from 'express'
const route = express.Router()
import deleteRowFileController from '../controller/rowfile/delete.js'
import uploadController from '../controller/rowfile/upload.js'
import getRowFileController from '../controller/rowfile/get.js'
import databaseConroller from '../controller/database/database.js'
import fileSystem from '../controller/filesystem/create.js'
import getFileController from '../controller/filesystem/get.js'
import deleteFileController from '../controller/filesystem/delete.js'
import getChildFileController from '../controller/filesystem/child/get.js'





route.post('/upload', uploadController)
route.delete('/delete/rowfile', deleteRowFileController)
route.get('/get/rowfile', getRowFileController)
route.post('/database', databaseConroller)
route.post('/file', fileSystem)
route.get("/get/file", getFileController)
route.delete('/delete/file', deleteFileController)
route.get('/get/file/child', getChildFileController)


export default route