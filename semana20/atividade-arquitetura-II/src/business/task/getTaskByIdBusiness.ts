import { selectTaskById } from "../../data/task/selectTaskById"
import { taskOutputDTO } from "../../model/task"

export const getTaskByIdBusiness = async (
   taskInput: taskOutputDTO
) => {
   const result = await selectTaskById(taskInput.id)

   if (!result) {
      throw new Error("Tarefa não encontrada")
   }

   const taskWithUserInfo = {
      id: result.id,
      title: result.title,
      description: result.description,
      deadline: result.deadline,
      status: result.status,
      authorId: result.author_id,
      authorNickname: result.nickname
   }

   return taskWithUserInfo
}