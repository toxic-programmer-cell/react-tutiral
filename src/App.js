import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);
  return (
    <div style={{textAlign: 'center'}}>

      <h1 style={{color:'Red'}}> # useState Hook</h1>
      <p style={{color:'black'}}>----------------------------------------------</p>
      {/* COUNTER */}

      <h2 style={{color:'blue', textTransform: 'uppercase'}}>*Counter</h2>
      <button class="btn btn-primary" onClick={handleReset}>Reset</button>
      <h2>Counter: {counter}</h2>
      <button class="btn btn-secondary me-4" onClick={handleIncrement}>Increment</button>
      <button class="btn btn-secondary" onClick={handleDecrement}>Decrement</button>

      <h2 className='mt-4' style={{color:'blue', textTransform: 'uppercase'}}>*Text</h2>
      <input class="form-control border-primary bg-light" type="text" onChange={e => setText(e.target.value)} />
      <h3 class="text-center fst-italic text-primary mt-4">{text}</h3>
    </div>
  )
};

export default App;

