import { app } from "./app";
// import { getAllUsersOrdered } from "./endpoints/getAllUsersOrdered";
import { getAllUsers } from "./endpoints/getAllUsers";
// import { getUsersByName } from "./endpoints/getAllUsersByName";
// import { getUsersByType } from "./endpoints/getUsersByType"
// import { getUsersPaginated } from "./endpoints/getUsersPaginated"


// app.get("/users", getAllUsers)
// app.get("/users", getUsersByName)
app.get("/users", getAllUsers)
// app.get("/users", getAllUsersOrdered)
// app.get("/users", getUsersPaginated)
