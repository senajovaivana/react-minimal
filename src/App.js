import React from 'react'
import AppTitle from "./AppTitle";

function App() {
    return(
        <AppTitle/>
    );
}

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

console.log(generateArray(10));

export default App