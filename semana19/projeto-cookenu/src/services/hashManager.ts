import * as bcrypt from "bcryptjs";


export const generateHash = (s: string): string => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = bcrypt.genSaltSync(rounds);
    const result = bcrypt.hashSync(s, salt);
    return result;
  }

 export const compareHash = (s: string, hash: string): boolean => {
    return bcrypt.compareSync(s, hash);
  }