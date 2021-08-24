import SignUpForm from "../../components/SignUpForm/SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { SignUpPageContainer } from "./SignUpPage-styled";

const SignUpPage = () => {
  useUnprotectedPage();
  return (
    <SignUpPageContainer>
      <SignUpForm />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
