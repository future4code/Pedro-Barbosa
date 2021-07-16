import { Request, Response } from "express";
import { country } from "../types";
import { countries } from "../data";

export const getCountryByFilter = (req: Request, res: Response): void => {
  let result: country[] = countries;
  try {
    if (!req.query.name && !req.query.capital && !req.query.continent) {
      res.statusCode = 400;
      res.send("Parâmetros inválidos!");
      throw new Error("Invalid Parameters");
    }
    if (req.query.name) {
      result = result.filter((country) =>
        country.name.includes(req.query.name as string)
      );
    }

    if (req.query.capital) {
      result = result.filter((country) =>
        country.capital.includes(req.query.capital as string)
      );
    }

    if (req.query.continent) {
      result = result.filter((country) =>
        country.continent.includes(req.query.continent as string)
      );
    }

    res.send(result);
  } catch (error) {
    res.statusCode = 400;
    res.end();
  }
};
