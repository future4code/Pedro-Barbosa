// Exercício 2

// import { Request, Response } from "express"
// import { connection } from "../data/connection"

// export const getAllUsersOrdered = async (
//     req: Request, 
//     res: Response
//     ): Promise<void> => {
//     try {
//         const sort = req.query.sort === "name" ? "name" : req.query.sort === "type" ? "type" : "email"
//         const order = req.query.order === 'DESC' ? 'DESC' : 'ASC'

//         const result = await connection("aula48_exercicio")
//             .select()
//             .orderBy(sort, order)

//         if (!result.length) {
//             res.statusCode = 404
//             throw new Error("No users found")
//         }

//         res.status(200).send(result)

//     } catch (error) {
//         console.log(error)
//         res.send(error.message || error.sqlMessage)
//     }
// }