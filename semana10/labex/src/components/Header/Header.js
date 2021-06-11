import { HeaderContainer } from "./styled";
import logolabex from "../../assets/labex.png"

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logolabex} alt="Labex - Encontre as melhores viagens espaciais!" />
        </HeaderContainer>
    )
}
export default Header;