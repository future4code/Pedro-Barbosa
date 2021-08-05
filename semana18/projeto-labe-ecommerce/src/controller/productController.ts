import { Request, Response } from "express"
import { ProductDatabase } from "../data/ProductDatabase"
import { Product } from "../model/Product"

export const getProducts = async (req: Request, res: Response) => {
    try{
        const productControl = new ProductDatabase()
        const result = await productControl.getAllProducts()

        res.status(200).send(result)
    }
    catch (error){
        res.status(404).send(error.message || error.sqlMessage)
    }
}

export const createNewProduct = async (req: Request, res: Response) => {
    try{
       
        const body: Product = {
            id: req.body.id as string,
            name: req.body.name as string,
            description: req.body.description as string,
            price: req.body.price as number
        }
            const product = new Product(body.id, body.name, body.description, body.price)
            new ProductDatabase().createProduct(product)

            res.status(201).send({message:"Produto criado!", body})
        } catch (error){
        res.status(406).send(error.message || error.sqlMessage)
    }
}