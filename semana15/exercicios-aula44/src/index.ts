import { app } from "./app"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByTypeOrName } from "./endpoints/getUserByTypeOrName"
import { pingTest } from "./endpoints/pingTest"
import { newUser } from "./endpoints/newUser"

app.get("/ping", pingTest)
app.get("/users", getAllUsers)
app.get("/users/search", getUserByTypeOrName)
app.post("/users", newUser)