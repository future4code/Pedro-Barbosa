export type user = {
   id: string
   name: string
   nickname: string
   email: string
   address: string
}

export type addressInfo = {
   cep: number
   street: string
   number : number
   complement: string | undefined
   neighborhood: string
   city: string
   state: string
}