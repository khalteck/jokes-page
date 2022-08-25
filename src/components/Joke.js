import React from "react";

export default function Joke(props) {
    const [show, setShow] = React.useState(false)
    function handleClick() {
        setShow(prevState => !prevState)
    }
    return (
        <div>
            <h3>Setup: {props.setup}</h3>
            {show ? <p>Answer: {props.answer}</p> : null}
            <button className="btn" onClick={handleClick}>{show ? "Hide" : "Show"} Answer</button>
            <hr/>
        </div>
    )
}