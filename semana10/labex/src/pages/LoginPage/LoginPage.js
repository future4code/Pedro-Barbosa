import React, { useEffect } from "react";
import useForm from "../../hooks/useForm"
import axios from "axios";
import { BASE_URL } from "../../parameters";
import { useHistory } from "react-router-dom";
import { goToHomePage, goToAdminHomePage } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { HeaderHomeButton } from "../pages-styled";
import { Title } from "../pages-styled"
import { FormBoxLogin } from "./styled";
import Button from "@material-ui/core/Button"


const LoginPage = () => {
  const { form, onChange } = useForm({ email: "", password: "" })
  const history = useHistory();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToAdminHomePage(history);
    }
  }, [history]);

  const onClickLogin = (event) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(history);
      })
      .catch((err) => alert(err.response.data.message));
  };


  return (
    <div>
      <Header />
      <HeaderHomeButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHomePage(history)}>Home</Button>
      </HeaderHomeButton>
      <Title>Login Administrador</Title>

      <FormBoxLogin onSubmit={onClickLogin}>
        <input
          value={form.email}
          type="email"
          name="email"
          onChange={onChange}
          placeholder="E-mail"
          required
        />
        <input
          value={form.password}
          type="password"
          name="password"
          onChange={onChange}
          placeholder="Senha"
          required
        />

        <Button
          variant="contained"
          color="primary"
          type={"submit"}> Logar</Button>
      </FormBoxLogin>

    </div>
  );
}

export default LoginPage;