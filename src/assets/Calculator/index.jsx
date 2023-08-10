import { useState } from "react";
import "./style.css";

export function Calculator() {
  const [count, setCount] = useState(0)

  const operacaoAritimetic = (event) => {
    let operador = ''
    if(event.target.textContent === '+'){
      operador = event.target.textContent
      return console.log(operador)
    }
    if(event.target.textContent === '-'){
      operador = event.target.textContent
      return console.log(operador)
    }
    if(event.target.textContent === '*'){
      operador = event.target.textContent
      return console.log(operador)
    }
    if(event.target.textContent === '/'){
      operador = event.target.textContent
      return console.log(operador)
    }
    if(event.target.textContent === 'CE'){
      operador = event.target.textContent
      return console.log(operador)
    }
    if(event.target.textContent === 'C'){
      return alert('+/- - ainda não está em funcionamento')
    }
    if(event.target.textContent === '+/-'){
      return alert('+/- - ainda não está em funcionamento')
    }
    if(event.target.textContent === '⬅️'){
      return alert('backspace - ainda não está em funcionamento')
    }
    if(event.target.textContent === ','){
      return alert(', - ainda não está em funcionamento')
    }


    setCount(number => number + parseInt(event.target.textContent))
  }

  return (
    <div className="container">
      <div className="line">
        <div className="display">{count}</div>
      </div>
      <div className="line">
        <div onClick={event => operacaoAritimetic(event)} className="key">⬅️</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">CE</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">C</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">+/-</div>
      </div>
      <div className="line">
        <div onClick={event => operacaoAritimetic(event)} className="key">7</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">8</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">9</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">/</div>
      </div>
      <div className="line">
        <div onClick={event => operacaoAritimetic(event)} className="key">4</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">5</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">6</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">*</div>
      </div>
      <div className="line">
        <div onClick={event => operacaoAritimetic(event)} className="key">1</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">2</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">3</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">-</div>
      </div>
      <div className="line">
        <div className="key2">0</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">,</div>
        <div onClick={event => operacaoAritimetic(event)} className="key">+</div>
      </div>
    </div>
  );
}
