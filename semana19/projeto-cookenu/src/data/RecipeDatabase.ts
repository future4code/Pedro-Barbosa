import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";


export class RecipeDatabase extends BaseDatabase{
    private tableName: string = "cookenu_recipe";

    createRecipe = async (recipe: Recipe) => {
        await BaseDatabase
        .connection(this.tableName)
        .insert(recipe)
    }

    getRecipeById = async (id: string): Promise <any> => {
        const result = await BaseDatabase
        .connection(this.tableName)
        .select('*')
        .where({ id: id})
        return result
    }
    
}