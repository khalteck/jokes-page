import React from "react";

export default function Joke(props) {
    return (
        <div>
            <h3>Setup: {props.setup}</h3>
            <p>Answer: {props.answer}</p>
            <hr/>
        </div>
    )
}