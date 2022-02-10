import React, { useEffect, useState } from 'react';

export default function FetchData() {

    const [data,setData]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{

            return response.json();
        }).then((result)=>{
            console.log(result);

            setData(result);
            console.log(data)
            
        })

    },[10])
  return <div>
      {data.map((item) => {
            return (
                <h3>{item.username}</h3>
            )
        })}

  </div>;
}


