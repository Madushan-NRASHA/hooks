import React, { useState, useEffect } from 'react';

function AllCollapseExample() {
  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  useEffect(() => {
    // What I want to do as a side effect
    console.log(`New Count Is: ${count}`);
  }, [count]); // Dependency array

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default AllCollapseExample;
