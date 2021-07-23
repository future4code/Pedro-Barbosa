import connection from "../connection"
import { Request, Response } from "express"

export const editUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id
        const { name, nickname, } = req.body

        if (!name || !nickname ) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

      const result = await connection("TodoListUser")
        .update({
            name,
            nickname
        })
        .where({ id: id })

        if (!result) {
            res.status(404)
            throw new Error("Usuário não encontrado!")
        }

        res.send("Edição feita com sucesso!")
        
     } 
     catch (err) {

    }
}