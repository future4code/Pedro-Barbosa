import { app } from "./app"
import {getUsers, createNewUser } from "./controller/userController"
import {getProducts, createNewProduct} from "./controller/productController"

app.get('/users', getUsers)
app.post('/users', createNewUser)
app.get('/products', getProducts)
app.post('/products', createNewProduct)