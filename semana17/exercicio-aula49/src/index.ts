import { app } from "./app";
// import { getAllUsers } from "./endpoints/getAllUsers";
// import { getUsersByName } from "./endpoints/getAllUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType"


// app.get("/users", getAllUsers)
// app.get("/users", getUsersByName)
app.get("/users/:type", getUsersByType)
