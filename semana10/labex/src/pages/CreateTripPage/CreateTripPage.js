import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { goToAdminHomePage } from "../../routes/coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";
import useForm from "../../hooks/useForm"
import Header from "../../components/Header/Header";
import { HeaderHomeButton, LogoutAndBackPosition, Title } from "../pages-styled";
import { goToHomePage } from "../../routes/coordinator";
import { planets, BASE_URL } from "../../parameters"
import { ButtonContainerCentralize } from "../pages-styled"
import { FormBox } from "../pages-styled";
import Button from '@material-ui/core/Button';

const CreateTripPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const onClickCreate = (event) => {
    event.preventDefault()
    axios
      .post(`${BASE_URL}/trips`, form, {
        headers: { auth: localStorage.getItem("token") }
      })
      .then(() => {
        alert("Viagem adicionada com sucesso!")
        clear()
      })
      .catch((err) => alert(err.response.data.message))
  }

  const today = new Date()
  const stringToday = ("0" + today.getDate()).substr(-2) + "/" +
    ("0" + (today.getMonth() + 1)).substr(-2) + "/"
    + today.getFullYear()



  return (
    <div>
      <Header />
      <HeaderHomeButton>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToHomePage(history)}>Home</Button>
      </HeaderHomeButton>
      <Title>Novo destino</Title>
      <LogoutAndBackPosition>
        <Button
          variant="contained"
          color="primary"
          onClick={() => goToAdminHomePage(history)}
        >Voltar</Button>
      </LogoutAndBackPosition>
      <FormBox onSubmit={onClickCreate}>
        <input
          placeholder="Nome"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          pattern="^.{5,}$"
          title="Mínimo 5 caracteres!"
          required
        />
        <input
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
          pattern="^.{30,}$"
          title="Mínimo 30 caracteres!"
          required
        />
        <input id="outlined-basic" label="Duração em dias" variant="outlined"
          placeholder="Duração em dias"
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          min={50}
          required
        />
        <input
          placeholder="Data"
          type="date"
          name="date"
          value={form.date}
          onChange={onChange}
          min={stringToday}
          required
        />
        <select
          placeholder="Planeta"
          name="planet"
          defaultValue=""
          onChange={onChange}
          required
        >
          <option
            value={""}
            disabled
          >Escolha um planeta
          </option>
          {planets.map((planet) => {
            return <option value={planet} key={planet}>{planet}</option>
          })}
        </select>
        <ButtonContainerCentralize>
          <Button
            variant="contained"
            color="primary"
            type={"submit"}>Criar</Button>
        </ButtonContainerCentralize>
      </FormBox>
    </div>
  );
}

export default CreateTripPage;
