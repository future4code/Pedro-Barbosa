import { useState } from "react";
import axios from "axios";


  const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    const getData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        console.log("requisição com sucesso");
        setData(res.data);
      } catch (error) {
        
        if (error.response.status === 401) {
          let alerted = localStorage.getItem('alerted') || "";
        if (alerted !== "yes") {
        alert("Você precisa estar logado para acessar esta área!");
        localStorage.setItem("alerted", "yes")
        }
      } else {
        alert("Ocorreu um erro! Tente novamente!")
      }
      }
    };

    return [data, getData];
  };


export default useRequestData;
