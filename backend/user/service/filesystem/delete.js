import fileSystem from "../../model/fileSystem.js"


const deleteFileService = async (id) => {
    if(!id){
        throw new Error("Cant find id");
    }
    const file = await fileSystem.findOneAndDelete({ _id: id })

    if(!file){
        throw new Error("Cant fild file");
        
    }
}

export default deleteFileService