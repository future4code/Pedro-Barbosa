import { Request, Response } from "express"
import { accounts } from "../data"


export const getAccounts = (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
    
        res.status(200).send(accounts)
    } catch (error) {
        res.send(error.message)
    }
}