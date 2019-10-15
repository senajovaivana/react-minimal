import React from 'react'
import AppTitle from "./AppTitle";

function App() {
    return(
        <AppTitle/>
    );
}

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

const generateRandomArray = (n) => Array.from({length: n}, (v,k) => Math.floor(Math.random() * 25 ) + 1);

console.log(generateRandomArray(10));

export default App