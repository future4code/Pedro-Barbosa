import { Request, Response } from "express"
import { connection } from "../connection"

export const createClass = async (req: Request, res: Response): Promise<void> => {
    try {

        const { name, startDate, module } = req.body

        if (!name || !startDate || !module) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        if (module > 7 || module < 1) {
            res.status(406)
            throw new Error("Módulo inválido!")
        }

        const [day, month, year]: string = startDate.split("/")

        const startDateClean: Date = new Date(`${year}-${month}-${day}`);
        const endDateInitial: Date = new Date(`${year}-${month}-${day}`);
        const endDateEpoch = endDateInitial.setMonth(endDateInitial.getMonth() + 6);
        const endDate = new Date(endDateEpoch)


        await connection('Class')
            .insert({
                nome: name,
                data_inicio: startDateClean,
                data_final: endDate,
                modulo: module
            })

        res.send("Turma criada!").status(201)

    } catch (err) {
        res.status(400).send(err.sqlMessage || err.message)
    }
}