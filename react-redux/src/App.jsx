import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions';

function App() {

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className='buttons' >
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
