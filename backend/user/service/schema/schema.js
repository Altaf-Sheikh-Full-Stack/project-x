import databaseModel from "../../model/database.js"


const databaseService = async (name, decode) => {
    await schemaModel.create({
        userId: decode.id,
        databaseName: name,
    })
}

export default databaseService