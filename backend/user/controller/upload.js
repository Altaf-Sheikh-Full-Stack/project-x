import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import minioClient from '../config/miniio.js'
import jwt from 'jsonwebtoken'
import rowFileUploadServiec from '../service/upload.js'
const uploadFile = async (req, res) => {
    try {
        const { fileName } = req.body
        const tokens = req.cookies.token
        const decode = jwt.verify(tokens, process.env.JWT_KEY)

        if (!fileName) {
            return res.status(400).json({
                messgae: "Missing file"
            })
        }

        

        await rowFileUploadServiec(fileName, decode)

        const command = new PutObjectCommand({
            Bucket: "rowfiles", 
            Key: `${decode.id}/${fileName}`,
            ContentType: "csv"
        })

        const url = await getSignedUrl(minioClient, command, {
            expiresIn: 300
        })

        res.json({ url})


    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Failed to generate upload URL" })
    }
}

export default uploadFile