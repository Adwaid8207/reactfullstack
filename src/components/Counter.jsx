import React, { useState } from 'react';
import { Button } from '@mui/material';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button variant='contained' onClick={increment}>Increment</Button>
      <Button  variant='filled' onClick={decrement}>Decrement</Button>
    </div>
  );
}

export default Counter;