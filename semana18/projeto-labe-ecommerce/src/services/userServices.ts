import { UserRegistration } from "../model/User";

export const validateUser = ({ name, email, age }: UserRegistration) => {

    if (!name || !email || !age) {
        throw new Error("Preencha todos os campos para fazer o cadastro do usuário!")
    }

    if(name && age && email){
        return true
    }

}