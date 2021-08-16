import { User, UserAuthentication} from "../model/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
    private tableName: string = "cookenu_user";

    createUser = async (user: User): Promise<void> => {
        await BaseDatabase
            .connection(this.tableName)
            .insert(user)
    }


    getUserById = async (id: string | undefined): Promise<any> => {
        const result = await BaseDatabase
            .connection(this.tableName)
            .select('*')
            .where({ id: id })
        return result
    }

    getUserByEmail = async(email: string): Promise<any> => {
        const result = await BaseDatabase
        .connection(this.tableName)
        .select('*')
        .where({email : email})

        return result;
    }




}