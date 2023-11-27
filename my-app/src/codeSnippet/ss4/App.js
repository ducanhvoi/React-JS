function ClickMe() {
    return <button onClick={ () => console.log("Clicked 👍")}>Click me</button>;
}

function Counter() {
    let like =10;
    return (
        <div>
            {/* camelcase */}
          <button
          onClick={ () => {
              like++;
              console.loglike;
          }}
      >
          Like
      </button>
      <h1>{like}</h1>
      <h1>{like}</h1>
      <h1>{like}</h1>
        </div>
    );
}