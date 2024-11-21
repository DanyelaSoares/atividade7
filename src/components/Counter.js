import React, { useState } from 'react';
import '../App.css'; 

const Counter = () => {
  // useState para controlar o valor do contador
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)} disabled={count <= 0}>Decrementar</button>
    </div>
  );
};

export default Counter;
