import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import { logout } from "../../services/user";
import { goToLogin } from "../../routes/coordinator";
import { HeaderContainer } from "./Header-styled";


const Header = () => {
  const history = useHistory();
  const { states, setters, token } = useContext(GlobalStateContext);

  const rightButtonAction = () => {
    if (token) {
      logout();
      setters.setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  useEffect(() => {
    if (token) {
      setters.setRightButtonText("Logout");
    } else {
      setters.setRightButtonText("Login");
    }
  }, []);

  return (
      <HeaderContainer>
          <h1> HEADER</h1>
          <button onClick={rightButtonAction}>{states.rightButtonText}</button>
      </HeaderContainer>
    
  );
};

export default Header;
