import connection from "../connection"
import { Request, Response } from "express"

export const getTaskById = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;

        const result = await connection("TodoListTask")
            .select()
            .where({ id: id })

        if (!result) {
            res.status(404)
            throw new Error("Tarefa não encontrada!")
        }

        res.send(result[0])

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}