import { Request, Response } from "express";
import { users } from "../data";
import { User } from "../types";

export const getUserByTypeOrName = (req: Request, res: Response) => {
  let result: User[] | undefined = users;
  try {
    if (req.query.type) {
      result = result.filter((user) =>
        user.type.includes(req.query.type as string)
      );
    }

    if (req.query.name) {
      result = result.filter((user) =>
        user.name.includes(req.query.name as string)
      );
    }

    if (result.length === 0) {
      return res.status(204).send("No user was found");
    }

    return res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

//exercicio 2
//a) Como um query parameter. Porque ele parece ser mais apropriado para buscas
//de características de um tipo, até porque é opcional.

//b)Através do enum.

//exercicio 3
//a) Query Parameter
//b) Feito