import useForm from "../../hooks/useForm";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useParams } from "react-router";
import { Button, TextField } from "@material-ui/core";
import { createComment } from "../../services/comment";
import { useContext } from "react";

const CreateCommentForm = (props) => {

  const params = useParams();
  const { setters, requests } = useContext(GlobalStateContext);
  const [form, onChange, clear] = useForm({
    body: "",
  });

  const getComments = props.getComments


  const onSubmitForm = (event) => {
    event.preventDefault();
    createComment(form, clear, params, setters.setLoading, getComments, requests.getPostsDatabase);
    setters.setLoading(true)
  };


  return (
    <form onSubmit={onSubmitForm}>
      <TextField
        name={"body"}
        value={form.body}
        onChange={onChange}
        label={"Comentário"}
        variant={"outlined"}
        fullWidth
        required
        margin={"normal"}
      />
      <Button color={"primary"} variant={"contained"} type={"submit"} fullWidth>
        Comentar
      </Button>
    </form>
  );
};

export default CreateCommentForm;
