import BASE_URL from '../../parameters';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MatchCard, MatchListContainer, WarningNoMatches } from './styled';



export const MatchList = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const getMatches = () => {
            axios
                .get(`${BASE_URL}/matches`)
                .then((res) => setProfiles(res.data.matches))
                .catch((err) => alert("Alguma coisa deu errado!"));
        };
        getMatches();
    }, [profiles]);


    return (
        <MatchListContainer>

            {(Object.keys(profiles).length !== 0) ? (profiles.map((profile) => {
                return (
                    <MatchCard
                        key={profile.id}
                    >
                        <img
                            src={profile.photo}
                            alt={profile.name}
                        />
                        <p>{profile.name}</p>
                    </MatchCard>
                );
            })
            ) : (
                <WarningNoMatches>
                <p>Não há matches!</p>
                <p>Clique no canto superior esquerdo para achar sua cara metade!</p>
                <p>Caso não tenha apagado a lista, e o aplicativo mencionou um match, aguarde um momento que a lista aparecerá!</p>
                </WarningNoMatches>
            )}
        </MatchListContainer>
    );
}

export default MatchList;