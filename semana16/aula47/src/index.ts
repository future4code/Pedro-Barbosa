import { app } from "./app"
import { getActor } from "./endpoints/getActor"
import { getActorByName } from "./endpoints/getActorByName";

app.get("/actor", getActor);
app.get("/users/name/:name", getActorByName);