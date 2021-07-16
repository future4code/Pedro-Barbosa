import { Request, Response } from "express";

export const pingTest = (req: Request, res: Response) => {
  res.status(200).send("pong!");
};
