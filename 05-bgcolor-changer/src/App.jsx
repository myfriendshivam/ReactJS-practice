import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200 flex flex-wrap justify-center"
      style={{ backgroundColor: color  }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>
            Red</button>
          <button
            onClick={() => setColor("green")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>
            Green</button>
          <button
            onClick={() => setColor("blue")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>
            Blue</button>
          <button
            onClick={() => setColor("yellow")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}>
            Yellow</button>
          <button
            onClick={() => setColor("grey")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>
            Grey</button>
          <button
            onClick={() => setColor("pink")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}>
            Pink</button>
          <button
            onClick={() => setColor("purple")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>
            Purple</button>
          <button
            onClick={() => setColor("lavender")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}>
            Lavender</button>
          <button
            onClick={() => setColor("black")}
            className="outile-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>
            Black</button>
        </div>

      </div>
    </div>
  );
}

export default App;
