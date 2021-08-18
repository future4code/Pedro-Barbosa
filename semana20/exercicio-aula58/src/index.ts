import { app } from "./app"
import { login } from "./controller/user/login"
import { signUp } from "./controller/user/signUp"
import { getEveryUser } from "./controller/user/getEveryUser"
import { deleteSelectedUser } from "./controller/user/deleteSelectedUser"


app.post('/signup', signUp)
app.post('/login', login)
app.get('/all', getEveryUser)
app.delete('/:id', deleteSelectedUser)
