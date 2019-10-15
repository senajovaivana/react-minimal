import React from 'react'
import AppTitle from "./AppTitle";

const arrayTask5 = [2, 5, 8, 10];

function App() {
    return(
        <ul>
        {arrayTask5.map(item => {
            return <li>{item*item}</li>;
        })}
        </ul>
    );
}

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

const generateRandomArray = (n) => Array.from({length: n}, (v,k) => Math.floor(Math.random() * 25 ) + 1);

console.log(generateRandomArray(10));

export default App