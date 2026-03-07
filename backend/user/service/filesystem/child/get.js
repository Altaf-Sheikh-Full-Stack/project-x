import fileSystem from "../../../model/fileSystem.js"



const getChildFileService = async (parent) => {
    const childFile = await fileSystem.find({parent})

    return childFile
}


export default getChildFileService