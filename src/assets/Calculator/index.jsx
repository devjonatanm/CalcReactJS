import { useState } from "react";
import "./style.css";

export function Calculator() {
  const [count, setCount] = useState(0)


  let valor1 = 0
  let valor2 = 0
  let operator = ''
  const operacaoAritimetic = (event) => {

    let num = parseInt(event.target.textContent)
    
    if(num >= 0 && num <= 9 && valor1 === 0){
      valor1 = num
      console.log(valor1)
    }
    
    if(event.target.textContent==='+'&& valor1!==0 && operator===''){
      operator = '+'
      console.log(operator)
    }
    if(event.target.textContent==='-'&& valor1!==0 && operator===''){
      operator = '-'
      console.log(operator)
    }
    if(event.target.textContent==='/'&& valor1!==0 && operator===''){
      operator = '/'
      console.log(operator)
    }
    if(event.target.textContent==='*'&& valor1!==0 && operator===''){
      operator = '*'
      console.log(operator)
    }

    if(num >= 0 && num <= 9 && valor1 !== 0 && operator !== '' && valor2 === 0){
      valor2 = num
      console.log(valor2)
    }
    
    if(event.target.textContent === '=' && valor1 !== 0 && operator !== '' && valor2 !== 0){
      switch(operator){
        case '+':
          setCount(valor1+valor2)
        break;
        case '-':
          setCount(valor1-valor2)
        break;
        case '/':
          setCount(valor1/valor2)
        break;
        case '*':
          setCount(valor1*valor2)
        break;
      }
    }
  }

  return (
    <div className="container">
      <div className="line">
        <div className="display">{count}</div>
      </div>
      <div className="line">
        <div onClick={operacaoAritimetic} className="key">⬅️</div>
        <div onClick={operacaoAritimetic} className="key">CE</div>
        <div onClick={operacaoAritimetic} className="key">C</div>
        <div onClick={operacaoAritimetic} className="key">+/-</div>
      </div>
      <div className="line">
        <div onClick={operacaoAritimetic} className="key">7</div>
        <div onClick={operacaoAritimetic} className="key">8</div>
        <div onClick={operacaoAritimetic} className="key">9</div>
        <div onClick={operacaoAritimetic} className="key">/</div>
      </div>
      <div className="line">
        <div onClick={operacaoAritimetic} className="key">4</div>
        <div onClick={operacaoAritimetic} className="key">5</div>
        <div onClick={operacaoAritimetic} className="key">6</div>
        <div onClick={operacaoAritimetic} className="key">*</div>
      </div>
      <div className="line">
        <div onClick={operacaoAritimetic} className="key">1</div>
        <div onClick={operacaoAritimetic} className="key">2</div>
        <div onClick={operacaoAritimetic} className="key">3</div>
        <div onClick={operacaoAritimetic} className="key">-</div>
      </div>
      <div className="line">
        <div className="key2">0</div>
        <div onClick={operacaoAritimetic} className="key">=</div>
        <div onClick={operacaoAritimetic} className="key">+</div>
      </div>
    </div>
  );
}
