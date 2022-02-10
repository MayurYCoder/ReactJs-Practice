import React, { useState } from 'react';

function HooksObject() {
    const[name,setName]=useState({
        firstname:"",
        lastname:""
    })

   const handleInput=(e)=>{
        setName({
            ...name,[e.target.name]:e.target.value
        })
    }
  return <div>
      <input type="text" onChange={handleInput} value={name.firstname} name='firstname'></input>
      <input type="text" onChange={handleInput} value={name.lastname} name='lastname'></input>


      <h1>Your first name is:{name.firstname}</h1>
      <h1>Your last name is:{name.lastname}</h1>
  </div>;
}

export default HooksObject;
