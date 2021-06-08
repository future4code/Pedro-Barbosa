import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminHomePage from "../pages/AdminHomePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";



const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
  
          <Route exact path="/trips/application">
            <ApplicationFormPage />
          </Route>
  
          <Route exact path="/login">
            <LoginPage />
          </Route>
  
          <Route exact path ="/admin/trips/list">
            <AdminHomePage />
          </Route>

          <Route exact path ="/admin/trips/create">
            <CreateTripPage />
          </Route>

          <Route exact path ="/admin/trips/detail">
            <TripDetailsPage />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;