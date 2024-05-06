import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (event) => {
    setInput(input + event.target.value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={handleInput} value="7">7</button>
      <button onClick={handleInput} value="8">8</button>
      <button onClick={handleInput} value="9">9</button>
      <button onClick={handleInput} value="/">/</button>
      <br />
      <button onClick={handleInput} value="4">4</button>
      <button onClick={handleInput} value="5">5</button>
      <button onClick={handleInput} value="6">6</button>
      <button onClick={handleInput} value="*">*</button>
      <br />
      <button onClick={handleInput} value="1">1</button>
      <button onClick={handleInput} value="2">2</button>
      <button onClick={handleInput} value="3">3</button>
      <button onClick={handleInput} value="-">-</button>
      <br />
      <button onClick={handleInput} value="0">0</button>
      <button onClick={handleInput} value=".">.</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={handleInput} value="+">+</button>
      <br />
      <button onClick={handleClear}>Clear</button>
      <br />
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;
