import { RecipeRegistration } from "../model/Recipe"
import { Response } from "express"

export const validateRecipe = ({title, description }: RecipeRegistration, res: Response): boolean => {
    if (!title || !description) {
        res.status(406)
        throw new Error("Preencha todos os campos para fazer o cadastro da receita!")
    }

    if (title && description) {
        return true
    } else {
        return false
    }
}

export const validateGotRecipe = (info: any, res: Response) => {
    if (!info) {
        res.status(404)
        throw new Error("Receita não encontrada!")
    }

    if (info) {
        return true
    } else {
        return false
    }
}