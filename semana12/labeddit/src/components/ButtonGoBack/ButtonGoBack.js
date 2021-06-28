import { useHistory } from "react-router"
import { goBackFeed, goBackOtherPages } from "../../routes/coordinator";
import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";


const ButtonGoBack = () => {
    const history = useHistory();
    const { states } = useContext(GlobalStateContext);
    
    return <button onClick={states.currentPage === 1 ? () => goBackFeed(history) : () => goBackOtherPages(history, states.currentPage)}>Voltar</button>
}

export default ButtonGoBack;