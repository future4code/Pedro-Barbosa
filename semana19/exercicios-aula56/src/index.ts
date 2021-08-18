import app from "./app"
import createUser from './data/createUser'
import { login } from "./data/login"
import getUserById from "./data/getUserById";

app.post('/user/login', login);
app.post('/user/signup', createUser)
app.get('/user/profile', getUserById)