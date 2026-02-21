import rowFiles from "../../model/rowFiles.js"
const rowFileUploadServiec = async (fileName, decode) => {
    console.log(decode)
    console.log(fileName)
    const fileExits = await rowFiles.findOne({ fileName })

    if (!fileExits) {
        const file = await rowFiles.create({
            userId: decode.id,
            fileName
        })


        if (!file) {
            throw new Error("FILE_NOT_CREATED");
        }
    }else{
        throw new Error("file already exits");
    }
    
}


export default rowFileUploadServiec