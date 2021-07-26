// Exercício 1 - b)

// import { Request, Response } from "express"
// import { connection } from "../data/connection"

// export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
//     try {
//         const type = req.params.type

//         const result = await connection("aula48_exercicio")
//         .where("type", "LIKE", `%${type}%`)
 
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