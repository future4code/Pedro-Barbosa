import { Request, Response } from "express";
import { createUser } from "../../business/user/createUser";

export const signUp = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password, role } = req.body

    const token = await createUser({
      name,
      email,
      password,
      role
    })

    res
      .status(201)
      .send({
        message: "Usuário criado!",
        token
      })

  } catch (error) {
     res.status(400).send(error.message)
  }
}