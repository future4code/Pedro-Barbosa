import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function getUserById(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const authorization = req.headers.authorization as string;
      const auth = new Authenticator();
      const verifiedToken = auth.getTokenData(authorization);

      if (verifiedToken.role !== "normal") {
         throw new Error("Only a normal user can acess this funcionality");
      }


      const result = await connection('to_do_list_users')
         .select()
         .where({ id: verifiedToken.id })

      const id = result[0].user.id
      const email = result[0].user.email
      const role = result[0].user.role


      res.status(200).send({ id, email, role })

   } catch (error) {
      res.status(400).send({
         message: error.message,
      });
   }


}
