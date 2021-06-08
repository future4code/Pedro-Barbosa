import astroicon from '../../assets/iconastro.png';
import {
    ContainerHeader,
    LogoHeader,
    MatchIconPurple,
    MatchIconGreen,
    EvenSpace,
    BroomIcon
} from './styled';
import { mdiAccountMultipleCheck } from '@mdi/js';
import { mdiAccountSwitch } from '@mdi/js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';


const Header = (props) => {
    const { goToMatchList, goToMatchPage, page, clear } = props;

    return (
        <div>

            {page === "match page" && (
                <ContainerHeader>
                    <Tooltip
                        title="Lista de matches"
                    >
                        <MatchIconPurple
                            size={1.5}
                            path={mdiAccountMultipleCheck}
                            onClick={goToMatchList}
                        />
                    </Tooltip>

                    <LogoHeader src={astroicon} />

                    <EvenSpace />

                </ContainerHeader>
            )}
            {page === "match list" && (
                <ContainerHeader>

                    <Tooltip
                        title="Perfis"
                    >
                        <MatchIconGreen
                            size={1.5}
                            path={mdiAccountSwitch}
                            onClick={goToMatchPage}
                        />
                    </Tooltip>

                    <LogoHeader src={astroicon} />

                    <Tooltip
                        title="Apagar"
                    >
                        <BroomIcon>
                            <FontAwesomeIcon
                                onClick={clear}
                                icon={faBroom}
                                color="#762d93"
                                size="lg"
                                rotation="270"
                            />
                        </BroomIcon>
                    </Tooltip>
                </ContainerHeader>
            )}

        </div>
    );
};

export default Header;
