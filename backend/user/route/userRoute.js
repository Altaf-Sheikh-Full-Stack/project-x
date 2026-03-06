import express from 'express'
const route = express.Router()
import deleteRowFileController from '../controller/rowfile/delete.js'
import uploadController from '../controller/rowfile/upload.js'
import getRowFileController from '../controller/rowfile/get.js'
import databaseConroller from '../controller/database/database.js'
import fileSystem from '../controller/filesystem/filesystem.js'
import getFileController from '../controller/filesystem/get.js'
import deleteFileController from '../controller/filesystem/delete.js'

route.post('/upload', uploadController)
route.delete('/delete/rowfile', deleteRowFileController)
route.get('/get/rowfile', getRowFileController)
route.post('/database', databaseConroller)
route.post('/file', fileSystem)
route.get("/get/folder", getFileController)
route.delete('/delete/folder', deleteFileController)


export default route