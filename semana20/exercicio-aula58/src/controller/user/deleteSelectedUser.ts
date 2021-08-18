import { Request, Response } from "express"
import { deleteUser } from '../../business/user/deleteUser'

export const deleteSelectedUser = async ( req: Request, res: Response ): Promise<void> => {
   try {

    const id = req.params.id
    const userToken = req.headers.authorization as string

      await deleteUser({
        id,
        userToken
      })

      res.send({
         message: "Usuário apagado com sucesso",
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}