import fileSystem from "../../model/fileSystem.js"



const getFileService = async (userId, parentId) => {
    console.log("prent" + parentId)
    const file = await fileSystem.find({
        user: userId,
        parent: parentId

    })

    console.log(file)

    return file
}

export default getFileService