import fileSystem from "../../model/fileSystem.js"



const getFileService = async (id) => {
   const file = await fileSystem.find({
        user:id
    })

    return file
}

export default getFileService