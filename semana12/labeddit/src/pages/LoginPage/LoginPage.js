import LoginForm from "../../components/LoginForm/LoginForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage();

  return <LoginForm />;
};

export default LoginPage;
