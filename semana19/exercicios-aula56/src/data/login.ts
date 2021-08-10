import { compare, hash } from "../services/generateHash";
import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export async function login(req: Request, res: Response){

    try {
        const {email, password} = req.body;

        if(!email || !password){
            throw new Error("Por favor, preencha os campos 'email' e 'password'")
        }

        if(email.indexOf('@') === -1){
            throw new Error("Email inserido inválido")
        }

        const [user] = await connection('to_do_list_users')
         .where({ email });

         if (!user) {
            res.statusCode = 400
            throw new Error('Email não existe!');
         }

         const hashPassword = await hash(password)

         const compareResult = await compare(password, hashPassword)

         if(!compareResult){
            throw new Error('Credenciais inválidas');
         }

         const auth = new Authenticator();
         const token = auth.generateToken({id: user.id, role: user.role});

         res.status(200).send({token});
        
    } catch (error) {
        res.send({message: error.message});
    }
}