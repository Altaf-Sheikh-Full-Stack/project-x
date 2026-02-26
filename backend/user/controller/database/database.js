import databaseService from "../../service/database/database.js"
import jwt from 'jsonwebtoken'
import { Trino, } from 'trino-client';

const databaseConroller = async (req, res) => {
    try {
        const { name } = req.body.formValues
        const token = req.cookies.AuthToken
        const decode = jwt.verify(token, process.env.JWT_KEY)
        await databaseService(name, decode)

        const trino =  Trino.create({
            server: 'http://trino:8080',
            catalog: 'iceberg',
            // schema: 'altaf',
            extraHeaders: {
                'X-Trino-User': 'admin'
            }
        });


        
        const query = `CREATE SCHEMA IF NOT EXISTS altaf`;
        const iterator = await trino.query(query);

        for await (const row of iterator) {
            console.log(row.stats.state === 'FINISHED');
        }


    } catch (err) {
        console.log(err)
    }

}

export default databaseConroller