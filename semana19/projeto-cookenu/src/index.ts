import { app } from "./app"
import { login, signUp, getUserProfile, getAnotherUserProfile } from "./controller/userController"
import { createNewRecipe, getRecipeById } from "./controller/recipeController"

app.post('/signup', signUp)
app.post('/login', login)
app.get('/user/profile', getUserProfile)
app.get('/user/:id', getAnotherUserProfile)
app.post('/recipe', createNewRecipe)
app.get('/recipe/:id', getRecipeById)
