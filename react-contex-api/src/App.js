import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import UserProvider from './components/UserContext';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
     <UserProvider>
<Dashboard/>
<Main/>
     </UserProvider>
    </div>
  );
}

export default App;
