import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { signUp } from "../../services/user";
import { TextField, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router";
import { SignUpFormContainer } from "./SignUpForm-styled";

const SignUpForm = () => {
  const history = useHistory();
  const [form, onChange, clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { setters } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(
      form,
      clear,
      history,
      setters.setRightButtonText,
      setters.setLoading
    );
  };

  return (
    <SignUpFormContainer onSubmit={onSubmitForm}>
      <TextField
        value={form.username}
        name={"username"}
        onChange={onChange}
        label={"Username"}
        variant={"outlined"}
        fullWidth
        required
        autoFocus
        margin={"normal"}
      />
      <TextField
        value={form.email}
        name={"email"}
        onChange={onChange}
        label={"E-mail"}
        variant={"outlined"}
        type={"email"}
        fullWidth
        required
        margin={"normal"}
      />
      <TextField
        value={form.password}
        name={"password"}
        onChange={onChange}
        label={"Senha"}
        variant={"outlined"}
        type={"password"}
        fullWidth
        required
        margin={"normal"}
      />
      <Button
        color={"primary"}
        variant={"contained"}
        type={"submit"}
        fullWidth
      >Cadastrar</Button>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
