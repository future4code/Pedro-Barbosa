import axios from "axios";
import BASE_URL from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (
  body,
  clear,
  history,
  setRightButtonText,
  setLoading
) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setLoading(false);
      goToFeed(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response)
      alert("E-mail e/ou senha inválidos!");
    });
};

export const signUp = (
  body,
  clear,
  history,
  setRightButtonText,
  setLoading
) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToFeed(history);
      setRightButtonText("Logout");
      alert("Conta criada com sucesso!")
      setLoading(false);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
};

export const logout = () => {
  localStorage.removeItem("token");
};