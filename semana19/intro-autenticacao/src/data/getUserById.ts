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


     const result = await connection('to_do_list_users')
         .select()
         .where({ id: verifiedToken.id })

         const id = result[0].user.id
         const email = result[0].user.email


         res.status(400).send({ id, email})

   } catch (error) {
      console.log(error.message);
      if (res.statusCode === 200) {
         res.status(500).end()
      }

      
   }
}