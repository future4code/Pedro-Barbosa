import { Product } from "../model/Product";
import { BaseDatabase } from "./database/BaseDatabase";


export class ProductDatabase extends BaseDatabase{
    private tableName: string = "Product";

    createProduct = async (product: Product) => {
        await BaseDatabase
        .connection(this.tableName)
        .insert(product)
    }

    getAllProducts = async (): Promise <any> => {
        const result = await BaseDatabase
        .connection(this.tableName)
        .select("*")
        return result
    }
}