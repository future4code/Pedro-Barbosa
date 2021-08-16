import { connection } from "../connection"
import { user } from "../../model/user"


export const selectUserByEmail = async ( email: string ): Promise<user | null> => {
   try {
      const result = await connection("User_Arq")
         .select("*")
         .where({ email })

      if (!result[0]) {
         return null
      }

      return result[0];

   } catch (error) {
      throw new Error(error.slqMessage || error.message)
   }
}