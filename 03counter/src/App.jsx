import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() =>
            setCount((count) => {
              if (count < 20) {
                return count + 1;
              } else {
                return count;
              }
            })
          }
        >
          count
        </button>
        <p>count is {count}</p>
        <button
          onClick={() =>
            setCount((count) => {
              if (count <= 0) {
                return count;
              } else {
                return count - 1;
              }
            })
          }
        >
          decrease count
        </button>
      </div>
    </>
  );
}

export default App;
