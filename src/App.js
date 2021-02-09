import {React, useEffect, useState} from 'react'
import './App.css';
import Dashboard from './components/Dashboard'
import axios from 'axios'
import Login from './components/Login'

function App() {

  const[loggedIn, setLoggedIn] = useState(false)



  const HandleLogged = () =>{
    if(loggedIn){
      return <Dashboard />
    }
    else return <Login setLoggedIn={setLoggedIn}/>
  }
  
  return (
    <div>
      <HandleLogged />
      

    </div>
  );
}

export default App;
