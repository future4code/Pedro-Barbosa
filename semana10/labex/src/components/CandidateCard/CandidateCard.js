import React from "react";
import { BASE_URL } from "../../parameters";
import { ContainerCandidateCard, ButtonsContainer } from "./styled";
import axios from "axios";
import Button from '@material-ui/core/Button';

const CandidateCard = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

    const decide = (decision) => {
        const body = {
            approve: decision
        };

        axios
            .put(`${BASE_URL}/trips/${props.tripId}/candidates/${id}/decide`, body, {
                headers: { auth: localStorage.getItem("token") }
            })
            .then(() => {
                alert("Aprovação concluída!")
                props.getTripDetails()
            })
            .catch((err) => alert(err.response.data.message))
    };

    return (
        <ContainerCandidateCard>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            <ButtonsContainer>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => decide(true)}>Aprovar</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => decide(false)}>Reprovar</Button>
            </ButtonsContainer>

        </ContainerCandidateCard>
    );
};

export default CandidateCard;


