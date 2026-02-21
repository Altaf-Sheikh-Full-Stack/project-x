import rowFilesModel from "../../model/rowFiles.js"

const GetRowFileService = async(decode) => {
        const rowfile = await rowFilesModel.find({ userId: decode.id })
        if(!rowfile){
            throw new Error("FILE_NOT_FOUND_TO_DELETE_TO_GET");
        }

        return rowfile
}


export default GetRowFileService
