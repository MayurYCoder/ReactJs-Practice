import React, { useState } from 'react';

export default function HooksCounter() {

    const[count,setCount]=useState(0)
const handleInput=()=>{
  setCount(count+1)
}
    
  return <div>
      <button onClick={handleInput}>Increment {count}</button>
  </div>;
}
