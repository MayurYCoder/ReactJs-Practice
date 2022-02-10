import React, { useEffect, useState } from 'react';

function HookCounterOne() {

    const[count,setcount]=useState(0)

    useEffect(()=>{
document.title=`you clicked ${count}Times`
    })
  return <div>
      <button onClick={()=>{setcount(count+1)}} >Click{count}times</button>
  </div>;
}

export default HookCounterOne;

