import React, { useEffect } from "react";
import useInput from "../hooks/useInput"
import axios from "axios";
import { BASE_URL } from "../parameters";
import { useHistory } from "react-router-dom";


const LoginPage = () => {
  const [email, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const history = useHistory();

  useEffect(() => {
    document.title = "LabeX";
  });

  const onClickLogin = () => {
    const body = { email, password };
    console.log(body)

    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        history.push("/admin/trips/list");
      })
      .catch((err) => alert(err.response.data.message));
  };


  return (
    <div>
      oi login page
      <input value={email} onChange={handleEmail} placeholder="E-mail" />
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password" />
      <button onClick={onClickLogin}>Enviar</button>
    </div>
  );
}

export default LoginPage;
