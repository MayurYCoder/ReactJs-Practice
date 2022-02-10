import React, { useReducer } from 'react';

export default function FormsUseReducer() {

    const [input,setInput]=useReducer(ReducerCounter,{
        input=""

    })
  return <div>
      <input onChange={()=>setInput()} value="userInput" type="text"></input>


      <p>{input.userInput}</p>
  </div>;
}
