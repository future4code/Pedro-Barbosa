import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import BASE_URL from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const BasicPagination = () => {
  useProtectedPage();
  const { states, setters, requests } = useContext(GlobalStateContext);
  let search = window.location.search;
  let params = new URLSearchParams(search);
  
 
 
  const postsForCount = states.postsDatabase;
  const postsPerPage = states.postsPerPage;
  const postsCount = postsForCount.length;
  const url = `${BASE_URL}/posts?page=${states.currentPage}&size=${postsPerPage}`

  const pageNumbers = Math.floor(postsCount / postsPerPage) + 1;

  const handleChange = (event, value) => {
    setters.setCurrentPage(value);
    
  };

  useEffect(() => {
    setters.setCurrentPage(parseInt(params.get("page") || '1'))
    requests.getPostsDatabase()
    requests.getPosts()
  }, [url]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination
        count={pageNumbers}
        page={states.currentPage}
        onChange={handleChange}
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/feed${item.page === 1 ? '' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
    </div>
  );
}

export default BasicPagination;