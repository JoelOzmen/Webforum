import { Form, Button, InputGroup,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";

const Fadebook = (props)=>{


  const [logged, setLogged] = useState(false);

  const handleChange = (e) => setLogged(false);

    console.log("fadebook username: "+props.userFade)
   var val =getCookie(props.userFade);
   console.log("coockie value: "+val)

   function myFunction() {
  alert("I am an alert box!");
}
  
   if (logged) {
    return <Navigate to={"/FadeBook" }/>
   }

    return(
      
      <Nav
        // activeKey="/"
        //onSelect={(logout) => alert(`selected ${logout}`)}
      
          onSelect={(selectedKey) => myFunction()}
        
        
      >
        <Nav.Item onChange={myFunction} >
          <Nav.Link href="/"  >Log out </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onclick={ () =>myFunction()}>Post</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Message</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Fadebook
          </Nav.Link>
        </Nav.Item>


        <form>
        <label>
         UserName: {props.userFade}
          <input type="text" value={val}  />
        </label>
       
      </form>
    </Nav>
    )

}

export default Fadebook