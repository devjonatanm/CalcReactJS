import "./style.css";

export function Calculator() {
  return (
    <div className="container">
      <div className="line">0000000</div>
      <div className="line">
        <div className="key">BACK</div>
        <div className="key">CE</div>
        <div className="key">C</div>
      </div>
      <div className="line">
        <div onClick={console.log(7+7)} className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
      </div>
      <div className="line">
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
      </div>
      <div className="line">
        <div className="key">1</div>
        <div className="key">2</div>
        <div className="key">3</div>
      </div>
      <div className="line">
        <div className="key">0</div>
        <div className="key">,</div>
        <div className="key">+</div>
      </div>
    </div>
  );
}
