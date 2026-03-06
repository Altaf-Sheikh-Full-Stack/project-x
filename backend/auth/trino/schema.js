import { Trino, } from 'trino-client';
import jwt from 'jsonwebtoken'

const createSchema = async (req, res) => {
    const token = await req.cookies.AuthToken;
    console.log(token)
    const decode = jwt.verify(token, process.env.JWT_KEY);
    const id = decode.id
    const trino = Trino.create({
        server: 'http://trino:8080',
        catalog: 'iceberg',
        extraHeaders: {
            'X-Trino-User': 'admin'
        }
    });



    const query = `CREATE SCHEMA IF NOT EXISTS "${id}"`;
    const iterator = await trino.query(query);

    for await (const row of iterator) {
        if(row.stats.state === "FINISHED"){
            res.status(200).json({
                message:"schema created"
            })
        }else{
             res.status(500).json({
                message:"Somting went wrong"
            })
        }
        
    }
}


export default createSchema