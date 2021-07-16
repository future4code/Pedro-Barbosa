import { Request, Response } from "express";
import { users } from "../data";
import { User } from "../types";
import { USER_ROLES } from "../enum"

export const newUser = (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;
    let type = req.body.type as string;

    if (!name || !email || !age || !type) {
      throw new Error("Missing data in body to create user");
    }

    if (typeof name !== "string") {
      throw new Error("Invalid name");
    }

    if (typeof email !== "string") {
      throw new Error("Invalid email");
    }

    if (typeof age !== "number") {
      throw new Error("Invalid age");
    }

    type = type.toUpperCase();
    if (!(type in USER_ROLES)) {
      throw new Error("Invalid type");
    }

    users.forEach((user) => {
      if (user.email === email) {
        throw new Error("Email already exists");
      }
    });

    const newUser: User = {
      id: users.length + 1,
      name,
      email,
      age,
      type: type === USER_ROLES.NORMAL ? USER_ROLES.NORMAL : USER_ROLES.ADMIN,
    };

    users.push(newUser)

    res.status(200).send({
        message: "user created sucessfuly",
        user: newUser
    })
  } catch (err) {
    res.status(400).send(err.message);
  }
};

//exercicio 4
//a) Nada mudou.
//b) Não. Por convenção o método put ou patch são os que servem para sobrescrever dados.
