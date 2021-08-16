import { connection } from "../connection"
import { user } from "../../model/user"


export const selectAllUsers = async (): Promise<user | any> => {
   try {
      const result = await connection("User_Arq")
         .select("*")

      if (!result[0]) {
         return null
      }

      return result

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}