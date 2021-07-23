import connection from "../connection"
import { Request, Response } from "express"

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        await connection("TodoListUser")
            .insert({
                id: Date.now().toString(),
                name,
                nickname,
                email
            })
            
        res.send("Usuário criado!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}