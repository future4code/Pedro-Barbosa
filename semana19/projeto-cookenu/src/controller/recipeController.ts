import { Recipe, AuthenticationData } from "../model/Recipe"
import { generateId } from "../services/idGenerator"
import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator } from "../services/Authenticator";
import { validateRecipe, validateGotRecipe } from "../services/recipeServices";

export const createNewRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        if(!token) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")
        }
       
        const verifiedToken: AuthenticationData | null = Authenticator.getTokenData(token);

        if(!verifiedToken) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")

        }

        const id = generateId()
        const date: Date = new Date();

        const body: Recipe = {
            id: id,
            title: req.body.title,
            description: req.body.description,
            createdAt: date
        }

        const verifyBody = validateRecipe(body, res)

        if (verifyBody) {
            const recipe: Recipe = new Recipe(body.id, body.title, body.description, body.createdAt);
            new RecipeDatabase().createRecipe(recipe);

            res.status(201).send("Receita criada com sucesso!")
        }

    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}

export const getRecipeById = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        if(!token) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")
        }

        const verifiedToken: AuthenticationData | null = Authenticator.getTokenData(token);

        if(!verifiedToken) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")

        }

        const recipe: RecipeDatabase = new RecipeDatabase();
        const recipeFilter: any = await recipe.getRecipeById(req.params.id)

        const verifySearch: boolean = validateGotRecipe(recipeFilter[0], res)

        if(verifySearch) {
            res.status(202)
        }

        const { id, title, description, createdAt } = recipeFilter[0]

        res.send({ id, title, description, createdAt })

    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}