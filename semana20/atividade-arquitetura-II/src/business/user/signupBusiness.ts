import { hash } from "../../services/hashManager";
import { insertUser } from "../../data/user/insertUser";
import { userInputDTO } from "../../model/user";
import { generateToken } from "../../services/authenticator";
import { generateId } from "../../services/idGenerator";

export const signupBusiness = async (
   userInput: userInputDTO
):Promise<string> => {
   if (
      !userInput.name ||
      !userInput.nickname ||
      !userInput.email ||
      !userInput.password ||
      !userInput.role
   ) {
      throw new Error('Preencha os campos "name","nickname", "email" e "password"')
   }

   const cypherPassword = await hash(userInput.password);

   const newUser = {
      ...userInput,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
      role: userInput.role
   })

   return token

}
