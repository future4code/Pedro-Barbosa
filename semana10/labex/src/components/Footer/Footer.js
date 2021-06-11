import { FooterContainer } from "./styled";
import face from "../../assets/face.png"
import insta from "../../assets/insta.png"
import twit from "../../assets/twitter.png"

const Footer = () => {
    return (
        <FooterContainer>
            <a target="_blank" href="https://www.instagram.com"> <img src={insta} alt="Instagram" /></a>
            <a target="_blank" href="https://www.facebook.com"><img src={face} alt="Facebook" /></a>
            <a target="_blank" href="https://www.twitter.com"><img src={twit} alt="Twitter" /></a>
            <p>Pedro Rodrigues © 2021</p>
        </FooterContainer>
    )
}
export default Footer;