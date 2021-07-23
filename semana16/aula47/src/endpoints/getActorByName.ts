import { Request, Response } from "express"
import connection from "../connection"

export const getActorByName = async (req: Request, res: Response): Promise<any> => {
    try {
        const name: string = req.params.name
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
        `)

        res.status(200).send(result[0][0])
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}