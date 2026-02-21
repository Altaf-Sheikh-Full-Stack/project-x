import rowFilesModel from "../../model/rowFiles.js"


const DeleteRowFileService =  async(id) => {
    const file = await rowFilesModel.findOneAndDelete({ _id: id })
    if(!file){
        throw new Error("FILE_NOT_FOUND_TO_DELETE");
    }
}


export default DeleteRowFileService