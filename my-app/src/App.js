import logo from './logo.svg';
import React from 'react';
import './App.css';


export default import { useState } from "react";

export default function Myapp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton>
            </MyButton>
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handClick}>
            Click {count} times
        </button>
    )
}