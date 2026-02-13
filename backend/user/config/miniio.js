import { S3Client } from "@aws-sdk/client-s3"

const minioClient = new S3Client({
  endpoint: "http://localhost:9000",
  region: "us-east-1",
  credentials: {
    accessKeyId:"admin",
    secretAccessKey:"password"
  },
  forcePathStyle: true
})

export default minioClient
