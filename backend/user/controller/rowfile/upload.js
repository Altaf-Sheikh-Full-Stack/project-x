import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import minioClient from '../../config/miniio.js'
import jwt from 'jsonwebtoken'
import rowFileUploadService from "../../service/rowfile/upload.js"
const uploadFile = async (req, res) => {
    try {

        const { fileName } = req.body
        const tokens = req.cookies.AuthToken
        const decode = jwt.verify(tokens, process.env.JWT_KEY)



        if (!fileName) {
            return res.status(404).json({
                messgae: "Missing file"
            })
        }

        if (!fileName.endsWith('.csv')) {
            return res.status(404).json({
                message: "file type not allowed"
            })
        }

        await rowFileUploadService(fileName, decode)

        const command = new PutObjectCommand({
            Bucket: "rowfiles",
            Key: `${decode.id}/${fileName}`,
            ContentType: "csv"
        })

        const url = await getSignedUrl(
            new S3Client({
                endpoint: "http://localhost:9000",
                region: "us-east-1",
                credentials: {
                    accessKeyId: "admin",
                    secretAccessKey: "password"
                },
                forcePathStyle: true
            }),
            command,
            { expiresIn: 300 }
        )

        // const url = await getSignedUrl(minioClient, command, {
        //     expiresIn: 300
        // })

        res.json({ url })

    } catch (err) {
        if (err.message === "USER_NOT_FOUND") {
            return res.status(404).json({
                message: "user not found"

            })
        }
        res.status(500).json({ error: "Somting went wrong" })
        console.log(err)
    }
}

export default uploadFile