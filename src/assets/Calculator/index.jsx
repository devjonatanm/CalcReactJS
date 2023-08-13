import { useState } from "react";
import "./style.css";

export function Calculator() {
  const [count, setCount] = useState(0)

  let value1 = 0
  let value2 = 0
  let operator = ''

  const operacArit = (event) => {

    let num = parseInt(event.target.textContent)
    
    if(num >= 0 && num <= 9 && value1 === 0){
      value1 = num
      console.log(value1)
    }
    
    if(event.target.textContent==='+'&& value1!==0 && operator===''){
      operator = '+'
      console.log(operator)
    }
    if(event.target.textContent==='-'&& value1!==0 && operator===''){
      operator = '-'
      console.log(operator)
    }
    if(event.target.textContent==='/'&& value1!==0 && operator===''){
      operator = '/'
      console.log(operator)
    }
    if(event.target.textContent==='*'&& value1!==0 && operator===''){
      operator = '*'
      console.log(operator)
    }

    if(num >= 0 && num <= 9 && value1 !== 0 && operator !== '' && value2 === 0){
      value2 = num
      console.log(value2)
    }
    
    if(event.target.textContent === '=' && value1 !== 0 && operator !== '' && value2 !== 0){
      switch(operator){
        case '+':
          setCount(value1+value2)
        break;
        case '-':
          setCount(value1-value2)
        break;
        case '/':
          setCount(value1/value2)
        break;
        case '*':
          setCount(value1*value2)
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
        <div onClick={operacArit} className="key">⬅️</div>
        <div onClick={operacArit} className="key">CE</div>
        <div onClick={operacArit} className="key">C</div>
        <div onClick={operacArit} className="key">+/-</div>
      </div>
      <div className="line">
        <div onClick={operacArit} className="key">7</div>
        <div onClick={operacArit} className="key">8</div>
        <div onClick={operacArit} className="key">9</div>
        <div onClick={operacArit} className="key">/</div>
      </div>
      <div className="line">
        <div onClick={operacArit} className="key">4</div>
        <div onClick={operacArit} className="key">5</div>
        <div onClick={operacArit} className="key">6</div>
        <div onClick={operacArit} className="key">*</div>
      </div>
      <div className="line">
        <div onClick={operacArit} className="key">1</div>
        <div onClick={operacArit} className="key">2</div>
        <div onClick={operacArit} className="key">3</div>
        <div onClick={operacArit} className="key">-</div>
      </div>
      <div className="line">
        <div className="key2">0</div>
        <div onClick={operacArit} className="key">=</div>
        <div onClick={operacArit} className="key">+</div>
      </div>
    </div>
  );
}
