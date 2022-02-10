import React from 'react';
import Page from './Page';

export default function Main({userdata}) {
  return <div>

{console.log("Inside Main",userdata)}

<Page userData={userdata}/>
  </div>;
}
