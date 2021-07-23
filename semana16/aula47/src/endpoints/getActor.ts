import { Request, Response } from "express"
import connection from "../connection"

export const getActor = async (req: Request, res: Response): Promise<any> => {
    try {
        const gender: string = req.query.gender as string
        const result = await connection("Actor")
        .count("* as count")
        .where({ gender : gender})
        

        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}