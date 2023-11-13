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
  const [disp, setDisp] = useState("");
  const [acc1, setAcc1] = useState(0);
  //Arithmetic
  const [subtract, setSubtract] = useState(false);
  const [adding, setAdd] = useState(false);
  const [multiply, setMulti] = useState(false);
  const [divide, setDivide] = useState(false);
  // const [results, setResults] = useState("");
  // const [acc, setAccu] = useState(0);

  function displayNums(num) {
    setDisp((disp) => disp + num.toString());
    // setAcc1((acc) => acc + num.toString());
  }

  function equal() {
    if (adding) {
      setDisp((disp) => (+disp + acc1).toFixed(5));
    }
    if (subtract) {
      setDisp((disp) => (acc1 - Number(disp)).toFixed(5));
    }
    if (divide) {
      setDisp((disp) => (acc1 / Number(disp)).toFixed(5));
    }
    if (multiply) {
      setDisp((disp) => (+disp * acc1).toFixed(5));
    }
  }

  function handleAdd(disp) {
    setAdd(true);
    setSubtract(false);
    setMulti(false);
    setDivide(false);
    setAcc1((acc) => Number(disp));
    setDisp((disp) => "");
  }

  function handleSubtract() {
    setAdd(false);
    setSubtract(true);
    setMulti(false);
    setDivide(false);
    setAcc1((acc) => Number(disp));
    setDisp((disp) => "");
  }
  function handleDivide() {
    setAdd(false);
    setSubtract(false);
    setMulti(false);
    setDivide(true);
    setAcc1((acc) => Number(disp));
    setDisp((disp) => "");
  }

  function handleMultiply() {
    setAdd(false);
    setSubtract(false);
    setMulti(true);
    setDivide(false);
    setAcc1((acc) => Number(disp));
    setDisp((disp) => "");
  }
  function handleClear() {
    setAdd(false);
    setSubtract(false);
    setMulti(false);
    setDivide(false);
    setAcc1((acc) => 0);
    setDisp((disp) => "");
  }

  // function displayNums(num) {
  //   setDisp((nums) => [...nums, num]);
  //   // setDisp((disp) => acc.toString());
  //   console.log(disp);
  // }
  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="input-container">
          <div className="num-display">{disp}</div>
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
            <div onClick={() => handleAdd(disp)} className="funcbtn btn">
              +
            </div>
            <div onClick={handleSubtract} className="funcbtn btn">
              -
            </div>
            <div onClick={handleDivide} className="funcbtn btn">
              ÷
            </div>
            <div onClick={handleMultiply} className="funcbtn btn">
              x
            </div>
            <div onClick={equal} className="funcbtn btn">
              =
            </div>
            <div onClick={handleClear} className="funcbtn btn clearbtn">
              C
            </div>
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
