import { AuthenticationData } from "../model/User"
import * as jwt from "jsonwebtoken";
export class Authenticator {

   public generateToken(info: AuthenticationData): string {
        return jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN }
        )
    }

    public static getTokenData(token: string): AuthenticationData | null {
        try {
            return jwt.verify(token, process.env.JWT_KEY! as string) as any;
          
        } catch (err) {
            return null
        }

    }
}