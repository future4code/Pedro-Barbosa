import { Request, Response } from "express"
import { getAllUsers} from "../../business/user/getAllUsers"

export const getEveryUser = async ( req: Request, res: Response ): Promise<void> => {
   try {

    const userToken = req.headers.authorization as string

      const users = await getAllUsers({
        userToken,
      })

      res.send({
         message: "Lista de usuários",
         users
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}