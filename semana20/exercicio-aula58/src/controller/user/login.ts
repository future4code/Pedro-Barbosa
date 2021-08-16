import { Request, Response } from "express"
import { loginUser } from "../../business/user/loginUser"

export const login = async ( req: Request, res: Response ): Promise<void> => {
   try {

    const { email, password } = req.body

      const token = await loginUser({
        email,
        password
      })

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}