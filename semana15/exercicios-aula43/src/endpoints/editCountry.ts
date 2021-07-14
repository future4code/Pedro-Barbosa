import { countries } from "../data";
import { Request, Response } from "express";

export const editCountry = (req: Request, res: Response) => {
  try {
    const countryIndex: number = countries.findIndex(
      (country) => (country.id === Number(req.params.id))
    );

    if (countryIndex === -1) {
      res.status(404).send("País não encontrado");
      throw new Error();
    }

    if (!req.body.name && !req.body.capital) {
      throw new Error("Invalid Parameters");
    }

    if (req.body.name) {
      countries[countryIndex].name = req.body.name;
    }
    if (req.body.capital) {
      countries[countryIndex].capital = req.body.capital;
    }

    res.status(200).send("País atualizado com sucesso");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
