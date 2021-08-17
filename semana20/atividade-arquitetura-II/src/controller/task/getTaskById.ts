import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import { taskOutputDTO } from "../../model/task";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const input: taskOutputDTO = {
         id: req.params.id
      }


      const task = getTaskByIdBusiness(input)

      res.status(200).send(task)

   } catch (error) {
      res.status(400).send(error.message)
   }
}