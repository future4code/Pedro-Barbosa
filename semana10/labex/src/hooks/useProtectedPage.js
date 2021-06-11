import { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
      alert("Você precisa estar logado para acessar essa área!")
    }
  }, [history]);
};

export default useProtectedPage;
