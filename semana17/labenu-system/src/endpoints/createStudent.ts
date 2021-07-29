import { Request, Response } from "express"
import { connection } from "../connection"

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, dateBirth, classId } = req.body

        if (!name || !email || !dateBirth || !classId) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        const resultFilter = await connection("Class")
        .select()
        .where({
            id : classId
        })


          if (!resultFilter[0]) {
            res.status(404)
            throw new Error("Turma não encontrada!")
        }

        const [day, month, year]: string = dateBirth.split("/")

        const dateBirthClean: Date = new Date(`${year}-${month}-${day}`);

        await connection('Student')
            .insert({
                nome: name,
                email,
                data_nasc: dateBirthClean,
                turma_id: classId
            })

        res.status(201).send("Aluno(a) criado(a)!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}