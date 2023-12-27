import { useState } from "react";

function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <div
        className=" flex justify-center w-full h-screen"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-16 bg-white p-2 rounded-2xl flex justify-between gap-4 mx-96">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-400 py-2 px-4 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-400 py-2 px-4 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="bg-gray-500 py-2 px-4 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-400 py-2 px-4 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              setColor("violet");
            }}
            className="bg-violet-500 py-2 px-4 rounded-2xl"
          ></button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="bg-orange-600 py-2 px-4 rounded-2xl"
          ></button>
        </div>
      </div>
    </>
  );
}

export default App;
