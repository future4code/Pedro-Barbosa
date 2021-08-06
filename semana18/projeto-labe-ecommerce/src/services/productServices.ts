import { ProductRegistration } from "../model/Product";

export const validateProduct = ({ name, description, price }: ProductRegistration) => {
    if (!name || !description || !price) {
        throw new Error("Preencha todos os campos para fazer o cadastro do produto!")
    } 

    if (name && description && price) {
        return true
    }
}