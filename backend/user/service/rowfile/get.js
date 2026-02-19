import rowFiles from "../../model/rowFiles.js"

const getrowfileservice = async(decode) => {
   
        const rowfile = await rowFiles.find({ userid: decode.id })
        if(!rowfile){
            throw new Error("Row file not found");
        }

        return rowfile
}


export default getrowfileservice
