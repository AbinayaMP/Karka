// Counter.js
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" and a function to update it "setCount"  count=state  setCount=state updater
  const [count, setCount] = useState(0); // initial value is 0

  const increment = () => setCount(prev => prev + 1);    //prev=parameter
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>➖ Decrement</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  );
}

export default Counter;