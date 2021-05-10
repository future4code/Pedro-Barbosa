import React from "react";


export default function ContainerInput(props) {
    return (
    <div>
        <p>{props.pergunta}</p>
        <input
            value={props.value}
            onChange={props.onChange}
        />
    </div>
    );
}

