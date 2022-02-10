import React, { useContext } from 'react';
import Main from './Main';
import { userContext } from './UserContext';

export default function Dashboard() {
  const data=useContext(userContext)
  return <div>
    {console.log("Inside Dashboard",data)}

    <Main userdata={data}/>

  </div>;
}
