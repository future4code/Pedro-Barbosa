import { Request, Response } from "express"
import { generateId } from "../services/idGenerator"
import { AuthenticationData, User, UserAuthentication } from "../model/User";
import { compareHash, generateHash } from "../services/hashManager";
import { UserDatabase } from "../data/UserDatabase";
import { validateUser, validateLoginUser, validateAnotherUser } from "../services/userServices";
import { Authenticator } from "../services/Authenticator";


export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = generateId()
        const body: User = {
            id: id,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const user: UserDatabase = new UserDatabase();
        const userFilter = await user.getUserByEmail(body.email)

        if (userFilter) {
            res.status(409)
            throw new Error('Esse e-mail já existe!')
        }


        const verifyBody = validateUser(body, res)



        if (verifyBody) {
            const user: User = new User(body.id, body.name, body.email, generateHash(body.password))
            new UserDatabase().createUser(user)

            const auth = new Authenticator();

            const token = auth.generateToken({id: body.id})

            res.status(201).send({ token })
        }


    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const body: UserAuthentication = {
            email: req.body.email,
            password: req.body.password
        }

        const user: UserDatabase = new UserDatabase();
        const userFilter = await user.getUserByEmail(body.email)

        if (!userFilter[0]) {
            res.status(404)
            throw new Error('Esse e-mail não existe!')
        }

        const passwordIsCorrect: boolean = compareHash(body.password, userFilter[0].password)

        if (!passwordIsCorrect) {
            res.status(401)
            throw new Error("Senha inválida!")
        }

        const verifyBody: boolean = validateLoginUser(body, res)

        const auth = new Authenticator();
        const token = auth.generateToken( {id: userFilter[0].id} )

        if (verifyBody) {

            res.status(202).send({ token })
        }

    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        if(!token) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")
        }
        const verifiedToken: AuthenticationData | null = Authenticator.getTokenData(token);
    
        const user: UserDatabase = new UserDatabase();
        const userFilter: any = await user.getUserById(verifiedToken?.id)

        const { id, name, email } = userFilter[0]

        res.send({ id, name, email })

    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}

export const getAnotherUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string;
        if(!token) {
            res.status(401)
            throw new Error("Não autorizado! Faça o login para acessar a ferramenta.")
        }
        Authenticator.getTokenData(token);
    
        const user: UserDatabase = new UserDatabase();
        const userFilter: any = await user.getUserById(req.params.id)

        const verifySearch: boolean = validateAnotherUser(userFilter[0], res)

        if(verifySearch) {
            res.status(202)
        }

        const { id, name, email } = userFilter[0]

        res.send({ id, name, email })

    } catch (err) {
        res.send(err.message || err.sqlMessage)
    }
}


