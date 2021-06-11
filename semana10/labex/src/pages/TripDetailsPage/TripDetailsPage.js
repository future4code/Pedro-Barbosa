import { useHistory, useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";
import useRequestData from "../../hooks/useRequestData"
import { goToAdminHomePage, goToHomePage } from "../../routes/coordinator"
import { HeaderHomeButton, LogoutAndBackPosition } from "../pages-styled"
import { TripDetailCard, TripDetailContainer, ApprovedCandidatesList, NoPendingContainer, PendingCandidatesContainer } from "./styled"
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import { Button } from "@material-ui/core";




const TripDetailsPage = () => {
  useProtectedPage()
  const history = useHistory();
  const { id } = useParams()
  const [tripDetails, getTripDetails] = useRequestData(`/trip/${id}`)




  const candidates = tripDetails && tripDetails.trip && tripDetails.trip.candidates.map((candidate) => {
    return <CandidateCard
      key={candidate.id}
      candidate={candidate}
      tripId={id}
      getTripDetails={getTripDetails}
    />
  })

  const approvedCandidates = tripDetails && tripDetails.trip && tripDetails.trip.approved.map((candidate) => {
    return <li key={candidate.id}>{candidate.name}</li>
  })




  return (
    <div>
      <Header />
      <HeaderHomeButton>
        <Button 
        variant="contained"
        color="primary"
        onClick={() => goToHomePage(history)}>Home</Button>
      </HeaderHomeButton>
      <LogoutAndBackPosition> 
        <Button 
        variant="contained"
        color="primary"
        onClick={() => goToAdminHomePage(history)}
        >Voltar</Button>
      </LogoutAndBackPosition>
      <TripDetailContainer>
        <TripDetailCard>
          {tripDetails && tripDetails.trip && <h1>{tripDetails.trip.name}</h1>}
          {tripDetails && tripDetails.trip && <div>
            <p><b>Nome:</b> {tripDetails.trip.name}</p>
            <p><b>Descrição:</b> {tripDetails.trip.description}</p>
            <p><b>Planeta:</b> {tripDetails.trip.planet}</p>
            <p><b>Duração:</b> {tripDetails.trip.durationInDays}</p>
            <p><b>Data:</b> {tripDetails.trip.date}</p>
          </div>}
        </TripDetailCard>
      </TripDetailContainer>
      <PendingCandidatesContainer>
          <h2>Candidatos Pendentes</h2>
          {candidates && candidates.length > 0 ? candidates : <NoPendingContainer><p>Não há candidatos pendentes</p></NoPendingContainer>}
      </PendingCandidatesContainer>
      <ApprovedCandidatesList>
        <h2>Candidatos Aprovados</h2>
        {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados</p>}
      </ApprovedCandidatesList>
    </div>
  );
}

export default TripDetailsPage;
