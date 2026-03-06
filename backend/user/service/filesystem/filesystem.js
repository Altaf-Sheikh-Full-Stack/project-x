import fileSystem from "../../model/fileSystem.js"



const fileSystemService = (name, type, parent, user) => {
    fileSystem.create({
        name,
        type,
        parent,
        user
    })
}

export default fileSystemService