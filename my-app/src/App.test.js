import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
import { useState } from "react";

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