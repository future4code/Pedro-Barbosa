import { useContext} from "react";
import { useHistory } from "react-router";
import GlobalStateContext from "../../global/GlobalStateContext";
import BASE_URL from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { goToPostPage } from "../../routes/coordinator";
import Pagination from "../../components/Pagination/Pagination";
import { FeedPageContainer } from "./FeedPage-styled";
import axios from "axios";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import { useEffect } from "react";

const FeedPage = () => {
  useProtectedPage();
  const history = useHistory();
  const { states, requests } = useContext(GlobalStateContext);
  const posts = states.posts;

  useEffect(() => {
    requests.getPosts();
  }, []);


  const createUpvotePost = (post) => {
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/posts/${post}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto pra cima computado!");
        requests.getPosts();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  
   const createDownvotePost = (post) => {
    const body = {
      direction: -1,
    };
    axios
      .post(`${BASE_URL}/posts/${post}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto pra baixo computado!");
        requests.getPosts();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  
   const changePostVote = (post) => {
    if (post.userVote === 1) {
      const body = {
        direction: -1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/votes`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("Voto alterado com sucesso!");
          requests.getPosts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      const body = {
        direction: 1,
      };
      axios
        .put(`${BASE_URL}/posts/${post.id}/votes`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("Voto alterado com sucesso!");
          requests.getPosts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

   const unvotePost = (post) => {
    axios
      .delete(`${BASE_URL}/posts/${post}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto retirado com sucesso!");
        requests.getPosts();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
      
  };
  

  const upvotePost = (postParameters) => {
    if (postParameters.userVote === null) {
      createUpvotePost(postParameters.id);
    } else if (postParameters.userVote > 0) {
      unvotePost(postParameters.id);
    } else if (postParameters.userVote < 0) {
      changePostVote(postParameters);
    }
  };

  const downvotePost = (postParameters) => {
    if (postParameters.userVote === null) {
      createDownvotePost(postParameters.id);
    } else if (postParameters.userVote < 0) {
      unvotePost(postParameters.id);
    } else if (postParameters.userVote > 0) {
      changePostVote(postParameters);
    }
  };
  

  const onClickCard = (id) => {
    goToPostPage(history, id);
  };

  const postCards = posts.map((post) => {
    return (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        username={post.username}
        voteSum={post.voteSum}
        userVote={post.userVote}
        commentCount={post.commentCount}
        onClickCard={() => onClickCard(post.id)}
        onClickUpvote={() => upvotePost(post)}
        onClickDownvote={() => downvotePost(post)}
      />
    );
  });

  

  return (
    <FeedPageContainer>
      <CreatePostForm />
      {postCards.length !== 0 ? postCards : <p>carregando...</p>}
      <Pagination />
    </FeedPageContainer>
  );
};

export default FeedPage;
