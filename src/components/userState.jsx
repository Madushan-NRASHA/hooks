import React, { useState } from 'react';

function UserState() {
  const [count, setCount] = useState(0);
  const [myVar,setMyVar]=useState('amila');
  const clickHandle=()=>{
    // myVar="pavan";
    setMyVar('pavan');
  }
  // Increment
  const increment = () => {
    setCount(prevCount => prevCount + 1);
    // setCount(d=>d+1);
  };

  // Decrement
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>{myVar}</h1>
      <button onClick={clickHandle}>onclick</button><br />
      <h1>Count: {count}</h1>
      
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default UserState;
