import connection from "../connection"
import { Request, Response } from "express"

export const createTask = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        const [day, month, year]: string = limitDate.split("/")

        const limitDateClean: Date = new Date(`${year}-${month}-${day}`)

        await connection("TodoListTask")
            .insert({
                id: Date.now().toString(),
                title,
                description,
                limit_date : limitDateClean,
                creator_user_id: creatorUserId
            })

        res.status(201).send("Tarefa criada!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}
