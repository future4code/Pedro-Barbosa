import axios from "axios";
import BASE_URL from "../constants/urls";

export const createComment = (body, clear, params, setLoading, getComments, getPosts) => {
  axios
    .post(`${BASE_URL}/posts/${params.id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert("Comentário postado com sucesso!");
      clear();
      getComments();
      getPosts();
      setLoading(false);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
