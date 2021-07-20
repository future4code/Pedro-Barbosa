import { app } from "./app";
import { getAccounts } from "./endpoints/getAccounts"
import { createAccount } from "./endpoints/createAccount"


app.get("/accounts", getAccounts)
app.post("/accounts", createAccount)