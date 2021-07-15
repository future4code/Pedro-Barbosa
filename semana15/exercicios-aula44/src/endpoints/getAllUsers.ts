import { Request, Response } from "express"
import { users } from "../data"

export const getAllUsers = (req: Request, res: Response) => {
    res.send(users)
}

// Resposta exercício 1
//a) GET
//b) app.get(entidade-utilizada, resposta)