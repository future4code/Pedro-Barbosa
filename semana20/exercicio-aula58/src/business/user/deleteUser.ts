import { selectAndDeleteUser } from "../../data/user/selectAndDeleteUser"
import { getTokenData } from "../../services/authenticator"


export const deleteUser = async ({ userToken, id }: any) => {

      if (!userToken || !id) {
         throw new Error("É necessário um token de acesso")
      }

      const validateUser = getTokenData(userToken)  

      if(!validateUser){
         throw new Error("Acesso não autorizado");
      }

      await selectAndDeleteUser(id)
}