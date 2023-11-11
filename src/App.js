// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="calculator-container">
        <div className="input-container">
          <input className="num-input" type="number"></input>
        </div>
        <div className="func-container">
          <div className="nums-container">
            <div className="numbtn btn">1</div>
            <div className="numbtn btn">2</div>
            <div className="numbtn btn">3</div>
            <div className="numbtn btn">4</div>
            <div className="numbtn btn">5</div>
            <div className="numbtn btn">6</div>
            <div className="numbtn btn">7</div>
            <div className="numbtn btn">8</div>
            <div className="numbtn btn">9</div>
            <div className="numbtn btn">0</div>
            <div className="funcbtn btn">+</div>
            <div className="funcbtn btn">-</div>
            <div className="funcbtn btn">÷</div>
            <div className="funcbtn btn">x</div>
            <div className="funcbtn btn">C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
