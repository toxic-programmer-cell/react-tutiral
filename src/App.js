import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormHandling } from './components';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

const handleInput = (e) =>{
  setInputValue(e.target.value);
}

const handleSubmit = () =>{
  console.log(inputValue);
  if(inputValue.trim()){
    setTodos([...todos, inputValue.trim()]);
    setInputValue('');
  }
}

const handleDelete = (index) =>{
  setTodos(todos.filter((_, i) => i !== index));
}

  return (
    <div style={{textAlign: 'center'}}>

      <h1 style={{color:'Red'}}> # useState Hook</h1>
      <p style={{color:'black'}}>----------------------------------------------</p>
{/* COUNTER */}

      <h2 style={{color:'blue', textTransform: 'uppercase'}}>*Counter</h2>
      <button class="btn btn-primary" onClick={handleReset}>Reset</button>
      <h2>Counter: {counter}</h2>
      <button className="btn btn-secondary me-4" onClick={handleIncrement}>Increment</button>
      <button className="btn btn-secondary" onClick={handleDecrement}>Decrement</button>

{/* TEXT */}
      <h2 className='mt-4' style={{color:'blue', textTransform: 'uppercase'}}>*Text</h2>
      <input className="form-control border-primary bg-light" type="text" onChange={e => setText(e.target.value)} />
      <h3 className="text-center fst-italic text-primary mt-4">{text}</h3>

      {/* TODO List */}

      <div>
        <h2>TODO LIST</h2>
        <input type="text" value={inputValue} onChange={handleInput} />
        <button onClick={handleSubmit}>Add todo</button>
        <ul>{
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>delete</button>
            </li>
          ))
          }</ul>
      </div>

      <FormHandling />

    </div>
  )
};

export default App;

