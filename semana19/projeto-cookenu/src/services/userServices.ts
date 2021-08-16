import { UserRegistration, UserAuthentication } from "../model/User"
import { Response } from "express"


export const validateUser = ({ name, email, password }: UserRegistration, res: Response): boolean => {
    if (!name || !email || !password) {
        res.status(406)
        throw new Error("Preencha todos os campos para fazer o cadastro do usuário!")
    }

    if (email.indexOf('@') === -1) {
        res.status(406)
        throw new Error("Digite um email válido!");
    }

    if (password.length < 6) {
        res.status(406)
        throw new Error("A senha deve ter ao menos 6 caracteres!");
    }

    if (name && password && email) {
        return true
    } else {
        return false
    }

}

export const validateLoginUser = ({ email, password }: UserAuthentication, res: Response): boolean => {
    if (!email || !password) {
        res.status(406)
        throw new Error("Preencha todos os campos para logar!")
    }


    if (email && password) {
        return true
    } else {
        return false
    }
}

export const validateAnotherUser = (info: any, res: Response) => {
    if (!info) {
        res.status(404)
        throw new Error("Usuário não encontrado!")
    }

    if (info) {
        return true
    } else {
        return false
    }
}
