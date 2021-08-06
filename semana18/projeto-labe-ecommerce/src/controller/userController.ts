import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../model/User"
import { validateUser } from "../services/userServices"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userControl = new UserDatabase()
        const result = await userControl.getAllUsers()

        res.status(200).send(result)
    }
    catch (error) {
        res.status(404).send(error.message || error.sqlMessage)
    }
}

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const id = Math.random().toString(36).substr(2, 9)
        const body: User = {
            id: id,
            name: req.body.name as string,
            email: req.body.email as string,
            age: req.body.age as number
        }

        const verifyBody = validateUser(body)

        if (verifyBody) {
            const user = new User(body.id, body.name, body.email, body.age)
            new UserDatabase().createUser(user)
        }

        res.status(201).send({ message: "Novo produto criado", body})
    }
    catch (error) {
        res.status(406).send(error.message || error.sqlMessage)
    }
}