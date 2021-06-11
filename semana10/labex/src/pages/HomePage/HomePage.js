import React from "react";
import { useHistory } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData"
import Header from "../../components/Header/Header";
import { goToLoginPage, goToApplicationFormPage, goToAdminHomePage } from "../../routes/coordinator";
import { HeaderHomeButton, Title, ButtonContainerCentralize } from "../pages-styled";
import { TripCard, TripContainer } from "./styled"
import Button from '@material-ui/core/Button';

const HomePage = () => {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory();
    const token = localStorage.getItem("token");

    const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
        return <TripCard key={trip.id}>
            <p><b>Nome:</b> {trip.name}</p>
            <p><b>Descrição: </b>{trip.description}</p>
            <p><b>Planeta: </b>{trip.planet}</p>
            <p><b>Duração: </b>{trip.durationInDays}</p>
            <p><b>Data: </b>{trip.date}</p>
        </TripCard>
    })



    return (
        <div>
            <Header />
            <HeaderHomeButton>
                {!token &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => goToLoginPage(history)}> Login</Button>}
                {token &&
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => goToAdminHomePage(history)}> Admin Home</Button>
                }
            </HeaderHomeButton>
            <Title>Confira nossas viagens disponíveis!</Title>
            <TripContainer>
                {tripsList && tripsList.length > 0 ? tripsList : <h1>Aguarde um momento...</h1>}
            </TripContainer>
            <ButtonContainerCentralize>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => goToApplicationFormPage(history)}>Inscrever-se para viagens</Button>
            </ButtonContainerCentralize>
        </div>
    );
}

export default HomePage;
