import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import Header from "../../components/Header/Header";
import { Title, HeaderHomeButton, ButtonContainerCentralize } from "../pages-styled";
import { useState } from "react";
import useForm from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";
import axios from "axios";
import { BASE_URL, countries } from "../../parameters";
import { FormBox } from "../pages-styled";
import Button from '@material-ui/core/Button';



const ApplicationFormPage = () => {
    const [tripId, setTripId] = useState("")
    const { form, onChange, clear } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [getTrips] = useRequestData("/trips", {})
    const history = useHistory();

    const clearForm = () => {
        clear()
        setTripId("")
    };

    const onClickSendForm = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/trips/${tripId}/apply`, form)
            .then(() => {
                alert("Aplicação enviada com sucesso!")
                clearForm()
            })
            .catch((err) => alert(err.response.message))

    };

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    };

    const selectTrips = getTrips.trips && getTrips.trips.map((trip) => {
        return <option key={trip.id} value={trip.id}>{trip.name} - {trip.planet}</option>
    });



    return (
        <div>
            <Header />
            <HeaderHomeButton>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => goToHomePage(history)}>Home</Button>
            </HeaderHomeButton>
            
            <Title>Formulário de inscrição</Title>

            <div>
                <FormBox onSubmit={onClickSendForm}>
                    <select
                        defaultValue=""
                        onChange={onChangeTrip}>
                        <option
                            value=""
                            disabled
                        >Escolha seu destino</option>
                        {selectTrips}
                    </select>
                    <input
                        placeholder="Nome"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern="^.{3,}$"
                        title="Mínimo 3 caracteres!"
                        required
                    />
                    <input
                        placeholder="Idade"
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        min={18}
                        required
                    />
                    <input
                        placeholder="Profissão"
                        type="text"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        pattern="^.{10,}$"
                        title="Mínimo 10 caracteres!"
                        required
                    />
                    <input
                        placeholder="Por que deve ir na viagem?"
                        type="text"
                        name="applicationText"
                        value={form.applicationText}
                        onChange={onChange}
                        pattern="^.{30,}$"
                        title="Mínimo 30 caracteres"
                        required
                    />
                    <select
                        placeholder="País"
                        name="country"
                        value={form.country}
                        onChange={onChange}
                        required
                    >
                        <option value=""
                            disabled
                        >Escolha um país
                        </option>
                        {countries.map((country) => {
                            return (
                                <option
                                    value={country}
                                    key={country}
                                >{country}
                                </option>
                            )
                        })}
                    </select>
                    <ButtonContainerCentralize>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">Enviar formulário</Button>
                    </ButtonContainerCentralize>
                </FormBox>
            </div>
        </div>
    );
};

export default ApplicationFormPage;
