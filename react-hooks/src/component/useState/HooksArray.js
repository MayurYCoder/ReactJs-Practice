import React, { useState } from 'react';

function HooksArray() {
    const [no,setNo]=useState([])

const generate=()=>{
    setNo([...no,{
        id:no.length,
        value:Math.floor(Math.random()*10)+1
    }]

    )
}
  return <div>
      <button onClick={generate}>Generate No</button>

      <ul>
          {no.map(item=>(
              <li key={item.id}>{item.value}</li>
          ))}
      </ul>
  </div>;
}

export default HooksArray;
