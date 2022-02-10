import React, { useEffect, useState } from 'react';

function HookCounterOne2() {

    const[count,setcount]=useState(0);
    const[name,setname]=useState("")

    useEffect(()=>{
        console.log("useEffect-updating document title");
        document.title=`You clicked{count}times`
    },[count])
  return <div>
      <input type="text" onChange={e=>setname(e.target.value)}></input>
      <button onClick={()=>setcount(count+1)}>click{count}times</button>
  </div>;
}

export default HookCounterOne2;
