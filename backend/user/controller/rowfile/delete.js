import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import deleteRowFileService from "../../service/rowfile/delete.js";
import minioClient from "../../config/miniio.js";
import jwt from 'jsonwebtoken'

const deleteRowFileController = async (req, res) => {
    try {
        const { id } = req.body
        const { fileName } = await deleteRowFileService(id)
        const tokens = req.cookies.AuthToken
        const decode = jwt.verify(tokens, process.env.JWT_KEY)

        console.log("1")
        console.log("Deleting key:", `${decode.id}/${fileName}`)
        const command = new DeleteObjectCommand({
            Bucket: "rowfiles",
            Key: `${decode.id}/${fileName}`,
        });



        console.log(command)
        console.log("2")

        console.log(fileName)
        console.log("hello world")

        await minioClient.send(command);

        res.json({ message: "File deleted successfully" });

    } catch (err) {
        if (err.message) {
            res.status(404).json({
                message: "user not found"
            })
        }


        console.log(err)
    }
}


export default deleteRowFileController