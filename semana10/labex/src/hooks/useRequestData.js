import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from '../parameters'

const useRequestData = (endpoint, initialState) => {
    const [data, setData] = useState(initialState)

    const getData = () => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => setData(res.data))
        .catch((err) => alert(err.response.data.message))
    }

    useEffect(() => {
        getData()
    }, [endpoint])

    return [data, getData]
}

export default useRequestData;