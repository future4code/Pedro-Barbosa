// Exercício 3

// import { Request, Response } from "express"
// import { connection } from "../data/connection"

// export const getUsersPaginated = async (req: Request, res: Response): Promise<void> => {
//    try {

//     const page: number = Number(req.query.page) || 1;
//     const size : number = 5;

//     const offset : number = size * (page - 1)

//       const result = await connection("aula48_exercicio")
//       .select()
//       .limit(size)
//       .offset(offset)

//       if (!result.length) {
//          res.statusCode = 404
//          throw new Error("No users found")
//       }

//       res.status(200).send(result)

//    } catch (error) {
//       console.log(error)
//       res.send(error.message || error.sqlMessage)
//    }
// }