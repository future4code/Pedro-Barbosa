export type user = {
   id: string
   email: string
   hashPassword: string 
   name: string
   nickname: string
   role: string
}

export interface AuthenticationData {
   id: string
   role: string
}