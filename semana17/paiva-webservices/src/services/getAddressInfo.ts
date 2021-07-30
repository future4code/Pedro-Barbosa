import axios from "axios"
import { connection } from "../data/connection"
import { addressInfo } from "../types"

export const getAddressInfo = async (
   zipcode: string,
   number: number,
   complement? : string | undefined
): Promise<addressInfo | null> => {
   try {

      const result = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`)

      return await connection("Address")
      .insert({
         cep: result.data.cep,
         street: result.data.logradouro,
         number: number,
         complement: complement,
         neighborhood: result.data.bairro,
         city: result.data.localidade,
         state: result.data.uf
      })

   } catch (error:any) {
      console.log(error.response ? error.response.data : error.message);
      return null
   }
}

getAddressInfo("06713-260", 92)
   .then(console.log)
   .catch(console.log)