import { User } from "../model/User";
import { BaseDatabase } from "./database/BaseDatabase";


export class UserDatabase extends BaseDatabase {
    private tableName: string = "User";

    createUser = async (user: User) => {
        await BaseDatabase
        .connection(this.tableName)
        .insert(user)
    }

    getAllUsers = async (): Promise<any> => {
        const result = await BaseDatabase
        .connection(this.tableName)
        .select("*")
        return result
    }
}