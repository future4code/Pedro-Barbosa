import { connection } from "../connection"
import { user } from "../../model/user"


export const selectAndDeleteUser = async (id: string): Promise<user | any> => {
   try {
      await connection("User_Arq")
         .delete(id)
         .where("id", id)

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}