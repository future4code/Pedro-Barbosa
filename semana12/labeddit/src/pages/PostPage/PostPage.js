import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import BASE_URL from "../../constants/urls";
import axios from "axios";
import CommentCard from "../../components/CommentCard/CommentCard";
import { PostPageContainer } from "./PostPage-styled";
import PostCard from "../../components/PostCard/PostCard";
import { useContext, useEffect } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import CreateCommentForm from "../../components/CreateCommentForm/CreateCommentForm";
import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";

const PostPage = () => {
  useProtectedPage();
  const params = useParams();
  const { states, requests } = useContext(GlobalStateContext);
  const [comments, getComments] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );
  const postsForFilter = states.postsDatabase;


  //Votos comentário
  const createUpvoteComment = (comment) => {
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/comments/${comment.id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto pra cima computado!");
        getComments();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const createDownvoteComment = (comment) => {
    const body = {
      direction: -1,
    };
    axios
      .post(`${BASE_URL}/comments/${comment.id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto pra baixo computado!");
        getComments();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const changeCommentVote = (comment) => {
    if (comment.userVote === 1) {
      const body = {
        direction: -1,
      };
      axios
        .put(`${BASE_URL}/comments/${comment.id}/votes`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("Voto alterado com sucesso!");
          getComments();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } else {
      const body = {
        direction: 1,
      };
      axios
        .put(`${BASE_URL}/comments/${comment.id}/votes`, body, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("Voto alterado com sucesso!");
          getComments();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  const unvoteComment = (comment) => {
    axios
      .delete(`${BASE_URL}/comments/${comment.id}/votes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Voto retirado com sucesso!");
        getComments();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const upvotePostComment = (comment) => {
    if (comment.userVote === null) {
      createUpvoteComment(comment);
    } else if (comment.userVote > 0) {
      unvoteComment(comment);
    } else if (comment.userVote < 0) {
      changeCommentVote(comment);
    }
  };

  const downvotePostComment = (comment) => {
    if (comment.userVote === null) {
      createDownvoteComment(comment);
    } else if (comment.userVote < 0) {
      unvoteComment(comment);
    } else if (comment.userVote > 0) {
      changeCommentVote(comment);
    }
  };

  //Votos Post
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
        requests.getPostsDatabase();
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
        requests.getPostsDatabase();
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
          requests.getPostsDatabase();
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
          requests.getPostsDatabase();
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
        requests.getPostsDatabase();
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

  const filteredPost =
    postsForFilter && postsForFilter.filter((post) => post.id === params.id);
  const post = filteredPost[0];

  const commentsCards = comments.map((comment) => {
    return (
      <CommentCard
        key={comment.id}
        body={comment.body}
        username={comment.username}
        voteSum={comment.voteSum}
        userVote={comment.userVote}
        onClickUpvote={() => upvotePostComment(comment)}
        onClickDownvote={() => downvotePostComment(comment)}
      />
    );
  });

  
  useEffect(() => {
    requests.getPostsDatabase();
    getComments();
  }, []);


  return (
    <PostPageContainer>
      <ButtonGoBack />
      {post ? (
        <PostCard
          title={post.title}
          body={post.body}
          username={post.username}
          voteSum={post.voteSum}
          userVote={post.userVote}
          commentCount={post.commentCount}
          onClickUpvote={() => upvotePost(post)}
          onClickDownvote={() => downvotePost(post)}
        />
      ) : (
        <p>carregando....</p>
      )}
      <CreateCommentForm
      getComments={getComments}
      comments={comments}
      />
      {commentsCards.length !== 0 ? commentsCards : <p>carregando...</p>}
    </PostPageContainer>
  );
};

export default PostPage;
