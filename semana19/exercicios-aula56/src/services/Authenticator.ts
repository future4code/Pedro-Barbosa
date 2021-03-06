import { AuthenticationData } from "../types";
import * as jwt from "jsonwebtoken";
export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id,
            role: info.role},
            process.env.JWT_KEY as string,
            {expiresIn: "1h"}
        )
        return token;
    }

    public getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any;

        return payload as AuthenticationData

    }
}