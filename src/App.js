import React from "react";
import Joke from "./components/Joke";
import jokesData from "./jokesData";

export default function App() {
    return (
        <div className="app">
            {jokesData.map((item) => {
                return <Joke 
                    key={item.id}
                    setup={item.setup}
                    answer={item.answer}
                />
            })}
        </div>
    )
}
/*<Joke
    setup="Why don't ants get sick?"
    answer="Because they have little anty bodies"
/>
<Joke
    setup="Coffee has a rough time in our house"
    answer="They get mugged every single morning"
/>
<Joke
    setup="Why was zero jealous of eight?"
    answer="Because he was wearing a designer belt!"
/>
<Joke
    setup="Why are footballer so cool?"
    answer="Because they have many fans"
/>*/