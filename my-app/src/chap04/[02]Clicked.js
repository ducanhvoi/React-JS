import { useState } from "react";

export default function Myapp() {
    const [count, setCount] = useState(0);

    function handClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />

        </div>
    );
}

function MyButton({ count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}