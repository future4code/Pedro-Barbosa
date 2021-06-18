import React from "react";
import { useHistory } from 'react-router-dom';
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToCreateTripPage, goToLoginPage, goToHomePage, goToTripDetailsPage } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { HeaderHomeButton, LogoutAndBackPosition, ButtonContainerCentralize } from "../pages-styled";
import { Title } from "../pages-styled"
import { TripInfoCard, ButtonSpace, TripListContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import axios from "axios";
import { BASE_URL } from "../../parameters";
import Button from '@material-ui/core/Button';


const AdminHomePage = () => {
  useProtectedPage()
  const history = useHistory();
  const [tripsData, getTrips] = useRequestData("/trips", {})

  const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
      headers: { auth: localStorage.getItem("token") }
    })
      .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
      })
      .catch((err) => alert(err.response.data.message))
  };

  const tripsList = tripsData.trips && tripsData.trips.map((trip) => {
    return (
      <TripInfoCard
        key={trip.id}
        id={trip.id}
        name={trip.name}>
        <p><b>{trip.name}</b></p>
        <ButtonSpace>
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              event.stopPropagation()
              if (window.confirm(`Tem certeza que deseja deletar a viagem ${trip.name}?`)) {
                deleteTrip(trip.id, getTrips)
              }
            }}>Deletar</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => goToTripDetailsPage(history, trip.id)}
          > Detalhes</Button>
        </ButtonSpace>
      </TripInfoCard>
    )
  });

  const logout = () => {
    window.localStorage.removeItem('token')
    goToLoginPage(history)
    alert("Você deslogou!")

  };


  return (
    <div>
      <Header />
      <HeaderHomeButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHomePage(history)}>Home</Button>
      </HeaderHomeButton>
      <Title>Área Administrativa</Title>
      <TripListContainer>
          {tripsList && tripsList.length > 0 ? tripsList : <h1>Aguarde um momento...</h1>}
      </TripListContainer>
      <ButtonContainerCentralize>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToCreateTripPage(history)}>Nova viagem</Button>
      </ButtonContainerCentralize>
      <LogoutAndBackPosition>
        <Button
          variant="contained"
          color="primary"
          onClick={logout}
        > Logout</Button>
      </LogoutAndBackPosition>

    </div>
  );
};

export default AdminHomePage;
