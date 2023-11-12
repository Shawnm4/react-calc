// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

const nums = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 0 },
];

function App() {
  const [acc, setAccu] = useState("");
  function displayNums(num) {
    setAccu((acc) => num.toString());
    console.log(acc);
  }
  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="input-container">
          <div className="num-display">{acc}</div>
        </div>
        <div className="func-container">
          <div className="nums-container">
            {nums.map((obj) => (
              <RenderNums
                nums={obj.id}
                key={obj.id}
                onHandleDisplay={displayNums}
              />
            ))}
            <div className="funcbtn btn">-</div>
            <div className="funcbtn btn">÷</div>
            <div className="funcbtn btn">x</div>
            <div className="funcbtn btn clearbtn">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RenderNums({ nums, onHandleDisplay }) {
  return (
    <div onClick={() => onHandleDisplay(nums)} className="btn numbtn">
      {nums}
    </div>
  );
}

export default App;
