import LoginForm from "./Form/LoginForm";
import RegForm from "./Form/RegForm";
//import * as React from "react";
import React,{useState ,useEffect} from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Fadebook from "./Fadebook";
import { getCookie } from "./Cookies";
//import "./App.css";


async function getThing() {
  /*try {
    let g = await fetch('http://localhost:8090/api/users')
    console.log(g)
  } catch(err) {
     alert(err); // Failed to fetch
  } */

 
    /*
    fetch(('/api/users')
    ).then(Response => Response.json()
    ).then((data) => {
          
          console.log(data)    
      }) */

      // const response = await fetch('http://localhost:8090/api/users/'+4);
      // const jsonData = await response.json();
      // console.log(jsonData) 
}

function App() {
  const [IdState,setIdState] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameFade,setUsernameFade] = useState([])
  

  
  //getThing() bara exempel på fetch som jag testade och gjorde på början


  // useEffect(() => {
  //   console.log("apppppppppp "+usernameFade)
  // }, [usernameFade]);

  return (
    <div className="App">
    
      <Routes> 
        <Route path="/" element={<LoginForm  userFade = {usernameFade} setUserFade ={setUsernameFade}/>} />
        <Route path="/reg" element={<RegForm userFade = {usernameFade} setUserFade ={setUsernameFade} />} />
        <Route path="/Fadebook" element={<Fadebook  userFade = {usernameFade} setUserFade ={setUsernameFade}/> }  />
        {/* Lägg till fler routes sen */}
      </Routes>
     
    </div>
  );
  }

export default App;