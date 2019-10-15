import React from 'react'
import AppTitle from "./AppTitle";

const array = [2, 56, 23, 88, 17, 4];

function App() {
    return(
        <ul>
        {array.map(item => {
            if (item > 15) {
                return <li>{item}</li>;
            }
            })}
        </ul>
    );
}

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

const generateRandomArray = (n) => Array.from({length: n}, (v,k) => Math.floor(Math.random() * 25 ) + 1);



console.log(generateRandomArray(10));

export default App