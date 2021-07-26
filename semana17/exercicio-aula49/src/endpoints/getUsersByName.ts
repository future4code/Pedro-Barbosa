// Exercício 1 - a)

// import { Request, Response } from "express"
// import { connection } from "../data/connection"

// export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
//     try {
//         const name = req.query.name

//         const result = await connection("aula48_exercicio")
//         .where("name", "LIKE", `%${name}%`)
 
//        if(!result.length){
//           res.statusCode = 404
//           throw new Error("No users found")
//        }
 
//        res.status(200).send(result)
       
//     } catch (error) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  }