import { Request, Response } from "express"
import { connection } from "../connection"

export const createClass = async (req: Request, res: Response): Promise<void> => {
    try {

        const { name, startDate, module } = req.body

        if (!name || !startDate) {
            res.status(406)
            throw new Error("Preencha todos os campos da requisição!")
        }

        if (module > 7 || module < 0) {
            res.status(406)
            throw new Error("Módulo inválido! Insira um módulo entre 0 e 7.")
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
                modulo: module === 0 ? 0 : module
            })

        res.status(201).send("Turma criada!")

    } catch (err) {
        res.send(err.sqlMessage || err.message)
    }
}