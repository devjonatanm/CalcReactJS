import { useState } from "react";
import "./style.css";

export function Calculator() {
  const [count, setCount] = useState(0)

  /* const setValue = () => {
    setCount(prevState => prevState + 1)
  } */


  return (
    <div className="container">
      <div className="line">
        <div className="display">{count}</div>
      </div>
      <div className="line">
        <div className="key">⬅️</div>
        <div className="key">CE</div>
        <div className="key">C</div>
        <div className="key">+/-</div>
      </div>
      <div className="line">
        <div onClick={event => setCount(event.target.textContent)} className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key">/</div>
      </div>
      <div className="line">
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
        <div className="key">*</div>
      </div>
      <div className="line">
        <div className="key">1</div>
        <div className="key">2</div>
        <div className="key">3</div>
        <div className="key">-</div>
      </div>
      <div className="line">
        <div className="key2">0</div>
        <div className="key">-</div>
        <div className="key">+</div>
      </div>
    </div>
  );
}
