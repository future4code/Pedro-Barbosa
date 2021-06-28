import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import BASE_URL from "../constants/urls";
import useRequestData from "../hooks/useRequestData";

const GlobalState = (props) => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [params, setParams] = useState("");
  const token = localStorage.getItem("token");
  const [rightButtonText, setRightButtonText] = useState("");
  const [postsDatabase, getPostsDatabase] = useRequestData(
    [],
    `${BASE_URL}/posts?page=1&size=9999999999999`
  );
  const [posts, getPosts] = useRequestData(
    [],
    `${BASE_URL}/posts?page=${currentPage}&size=${postsPerPage}`
  );
  
  const states = {
    posts,
    postsDatabase,
    postsPerPage,
    loading,
    currentPage,
    rightButtonText,
    token,
    params,
  };
  const setters = {
    setPostsPerPage,
    setLoading,
    setCurrentPage,
    setRightButtonText,
    setParams
  };
  const requests = { getPosts, getPostsDatabase };

  
  return (
    <GlobalStateContext.Provider
      value={{
        states,
        setters,
        requests,
        token
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;