import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useContext } from "react";
import { createPost } from "../../services/post";

const CreatePostForm = () => {
  const [form, onChange, clear] = useForm({ body: "", title: "" });
  const { requests } = useContext(GlobalStateContext);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost(form, clear, requests.getPosts);
  };
  
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Title"}
          variant={"outlined"}
          fullWidth
          required
          autoFocus
          margin={"normal"}
        />
        <TextField
          name={"body"}
          value={form.body}
          onChange={onChange}
          label={"Body"}
          variant={"outlined"}
          fullWidth
          required
          margin={"normal"}
        />
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Postar
        </Button>
      </form>
    </div>
  );
};

export default CreatePostForm;
