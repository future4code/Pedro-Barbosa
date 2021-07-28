import { Request, Response } from "express"
import { connection } from "../connection"

export const addTeacherIntoClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const { classId } = req.body
        const id = req.params.id

        if (!classId) {
            res.status(406)
            throw new Error("Preencha o campo da requisição!")
        }

        const result = await connection("Teacher")
            .update({
                turma_id: classId
            })
            .where({
                id: id
            })

            if(!result) {
                res.status(404)
                throw new Error("Professor(a) não encontrado(a)!")
            }

            res.send("Turma do professor(a) atualizada!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}