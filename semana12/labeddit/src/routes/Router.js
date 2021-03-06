import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <SignUpPage />
      </Route>
      <Route exact path="/">
        {token ? <Redirect to="/feed" />: <Redirect to="/login" />}
      </Route>
      <Route exact path="/feed">
        <FeedPage />
      </Route>
      <Route exact path="/posts/:id/comments">
        <PostPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
