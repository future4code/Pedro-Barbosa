import { Request, Response } from "express";
import { accounts } from "../data";
import { Account } from "../types";

export const createAccount = (req: Request, res: Response) => {
    try {
        const { name, cpf, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        const ageInMilisseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push({
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        res.send(error.message)
    }

}