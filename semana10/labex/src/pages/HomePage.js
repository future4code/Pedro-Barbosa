import React from "react";
import { useHistory } from "react-router-dom";
import { goToLoginPage, goToApplicationFormPage } from "../routes/coordinator"

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            oi HomePage
            <button onClick={() => goToLoginPage(history)} > Login</button>
            <button onClick={() => goToApplicationFormPage(history)}>Inscrever-se para viagens</button>
        </div>
    );
}

export default HomePage;
