import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { LoginFormContainer } from "./LoginForm-styled";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { login } from "../../services/user";
import { goToSignUp } from "../../routes/coordinator";

const LoginForm = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setters.setRightButtonText, setters.setLoading);
    setters.setLoading(true)
  };

  return (
    <LoginFormContainer>
      {states.loading ? (
        <h1>Carregando...</h1>
      ) : (
        <div>
          <form onSubmit={onSubmitForm}>
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
            />

            <input
              placeholder="Senha"
              type="password"
              name="password"
              value={form.password}
              onChange={onChange}
              required
            />

            <button type="submit">Logar</button>
          </form>
          <button onClick={() => goToSignUp(history)}>Cadastre-se</button>
        </div>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;
