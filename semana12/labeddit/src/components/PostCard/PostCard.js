import React from "react"
import { useHistory } from "react-router-dom"
import { PostCardContainer } from "./PostCard-styled"

const PostCard = (props) => {
    const history = useHistory()
return (
    <PostCardContainer>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
        <p>u/{props.username}</p>
        <p>Votos post: {props.voteSum === null ? 0 : props.voteSum}</p>
        <p>Comentários: {props.commentCount === null ? 0 : props.commentCount}</p>
        <p>Voto de usuário: {props.userVote}</p>
        <button onClick={props.onClickUpvote}>+</button>
        <button onClick={props.onClickDownvote}>-</button>
       {history.location.pathname === "/feed" ? <button onClick={props.onClickCard}>Detalhes post</button> : null }
    </PostCardContainer>
)

}

export default PostCard