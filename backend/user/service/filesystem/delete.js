import fileSystem from "../../model/fileSystem.js"


const deleteFileService = async (id) => {
    await fileSystem.findOneAndDelete({ _id: id })
}

export default deleteFileService