import { app } from "./app"
import { deleteCountryById } from "./endpoints/deleteCountryById"
import { getAllCountries } from "./endpoints/getAllCountries"
import { getCountryByFilter } from "./endpoints/getCountryByFilter"
import { getCountryById } from "./endpoints/getCountryById"
import { getRandomCountry } from "./endpoints/getRandomCountry"
import { editCountry } from "./endpoints/editCountry"

app.get("/countries", getAllCountries)
app.get("/countries/search", getCountryByFilter)
app.get("/countries/random", getRandomCountry) // precisa vir antes de /countries/:id
app.get("/countries/:id", getCountryById)
app.post("/countries/:id", editCountry)
app.delete("/countries/:id", deleteCountryById)
