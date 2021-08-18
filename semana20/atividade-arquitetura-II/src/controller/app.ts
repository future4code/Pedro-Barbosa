import express from 'express'
import cors from 'cors'
import { userRouter } from '../routes/userRouter'
import { taskRouter } from '../routes/taskRouter'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})