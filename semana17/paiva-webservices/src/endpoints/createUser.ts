import { Request, Response } from "express";
import { connection } from "../data/connection";
import transporter from "../services/mailTransporter";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address } = req.body

      if (!name || !nickname || !email || !address) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email' e 'address' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, address }

      await connection('aula51_users').insert(newUser)

      const mailInfo = await transporter.sendMail({
         from: `<${process.env.NODEMAILER_USER}>`,
         to: email,
         subject:"Finalize seu cadastro",
         html:`
            <p>Clique no botão abaixo para concluir seu cadastro na nossa plataforma:</p>
            <button>Verificar Email</button>
         `,
         text:`
            Clique no link abaixo para concluir seu cadastro na nossa plataforma:
            www.fakelink.com
         `
      })

      console.log(mailInfo);

      res.status(201).send(`Um email de confirmação foi enviado para ${email}`)

   } catch (error) {
      console.log(error);

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}