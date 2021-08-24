import React from "react";
import { CommentCardContainer } from "../CommentCard/CommentCard-styled";

const CommentCard = (props) => {
  return (
    <CommentCardContainer>
      <h3>{props.body}</h3>
      <p>u/{props.username}</p>
      <p>Voto do usuário: {props.userVote}</p>
      <p>Soma de votos: {props.voteSum}</p>
      <button onClick={props.onClickUpvote}>+</button>
      <button onClick={props.onClickDownvote}>-</button>
    </CommentCardContainer>
  );
};

export default CommentCard;
