import astroicon from '../../assets/iconastro.png';
import { ContainerHeader, LogoHeader, MatchIconPurple, MatchIconGreen, theme, ClearList, EvenSpace } from './styled'
import { ThemeProvider } from '@material-ui/core/styles';
import { mdiAccountMultipleCheck } from '@mdi/js'
import { mdiAccountSwitch } from '@mdi/js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    const { goToMatchList, goToMatchPage, page } = props

    return (
        <ThemeProvider theme={theme}>


            {page === "match page" && (
                <ContainerHeader>
                    
                    <MatchIconPurple
                        size={1.5}
                        path={mdiAccountMultipleCheck}
                        onClick={goToMatchList}
                    />
                    <LogoHeader src={astroicon} />
                    <EvenSpace />
                    
                </ContainerHeader>
            )}
            {page === "match list" && (
                <ContainerHeader>
                    
                    
                    <MatchIconGreen
                        size={1.5}
                        path={mdiAccountSwitch}
                        onClick={goToMatchPage}
                    />
                    <LogoHeader src={astroicon} />
                    <FontAwesomeIcon icon={faBroom} color="#762d93" size="lg" />
                </ContainerHeader>
            )}




        </ThemeProvider>
    )
}

export default Header;
