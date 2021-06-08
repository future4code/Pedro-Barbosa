import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BASE_URL from '../../parameters';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {
    ContainerMatchPage,
    ProfileImg,
    ProfileContainer,
    ProfileInfo,
    MatchIconContainer,
    ProfileBio,
    ProfileNameAge,
    HeartIcon,
    XIcon,
    WarningNoUser
} from './styled';



export const MatchPage = () => {
    const [profileList, setProfileList] = useState({});
    const [isMatch, setIsMatch] = useState({});


    useEffect(() => {
        const getProfile = () => {
            axios
                .get(`${BASE_URL}/person`)
                .then((res) => setProfileList(res.data.profile))
                .catch((err) => alert("Acabaram-se os usuários! Limpe a lista de matches se quiser continuar."));
        };
        getProfile();
    }, [isMatch, BASE_URL]);

    const choosePerson = async (userChoice) => {
        const body = {
            id: profileList.id,
            choice: userChoice,
        };

        const response = await axios
            .post(`${BASE_URL}/choose-person`, body);

        setIsMatch(response.data);

        if (response.data.isMatch) {
            alert(`Temos um match! Você já pode conversar com ${profileList.name}!`)
        };
    };


    return (
        <div>
            {profileList !== null ? (
                <ContainerMatchPage>
                    <ProfileContainer>
                        <ProfileImg
                            src={profileList.photo}
                            alt={profileList.name}
                        />
                        <ProfileInfo>
                            <ProfileNameAge>
                                <h1>{profileList.name},</h1>
                                <p>{profileList.age}</p>
                            </ProfileNameAge>
                            <ProfileBio>
                                <p>{profileList.bio}</p>
                            </ProfileBio>
                        </ProfileInfo>
                    </ProfileContainer>
                    <MatchIconContainer>
                        <XIcon onClick={() => choosePerson(false)}>
                            <FontAwesomeIcon size="3x" icon={faTimesCircle} />
                        </XIcon>
                        <HeartIcon onClick={() => choosePerson(true)}>
                            <FontAwesomeIcon size="3x" icon={faHeart} />
                        </HeartIcon>
                    </MatchIconContainer>
                </ContainerMatchPage>

            ) : (
                <WarningNoUser>Não há mais usuários! Se quiser continuar, limpe sua lista de matches.</WarningNoUser>
            )}
        </div>



    );
};

export default MatchPage;