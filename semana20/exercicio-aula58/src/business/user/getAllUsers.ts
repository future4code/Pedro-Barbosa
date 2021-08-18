import { selectAllUsers } from "../../data/user/selectAllUsers"
import { getTokenData } from "../../services/authenticator"
import { user } from "../../model/user"


export const getAllUsers = async ({ userToken }: any) => {

      if (!userToken) {
         throw new Error("É necessário um token de acesso")
      }

      const validateUser = getTokenData(userToken)  

      if(!validateUser){
         throw new Error("Acesso não autorizado");
      }

      const user: user | null = await selectAllUsers()

    return user
}