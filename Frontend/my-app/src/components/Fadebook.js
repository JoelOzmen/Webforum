import { Form, Button, InputGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import Message from './Message';
import Post from './Post';
import LoginForm from './Form/LoginForm';


//import Message from '../Message';
//import Post from '../Post';
//import LoginForm from './LoginForm';


const Fadebook = (props) => {

  const [routeChooser, setRouteChooser] = useState('');
  const [logged, setLogged] = useState(false);

  const handleChange = (e) => setLogged(false);

  console.log("fadebook username: " + props.userFade)
  var val = getCookie(props.userFade);
  console.log("coockie value: " + val)




  function myFunction() {
    alert("myFunction");
    deleteAllCookies();
    // setRouteChooser("myFunction")

  }

  function myFunction1() {
    alert("myFunction1");
    // setRouteChooser("myFunction1");


    //return <Navigate to={"/Post" }/>
  }

  function myFunction2() {
    alert("myFunction2");
    // setRouteChooser("myFunction2")

  }

  //  if (logged) {
  //    setRouteChooser="";
  //   return <Navigate to={"/FadeBook" }/>
  //  }



  // if (routeChooser == "myFunction") {
  //   setRouteChooser("");
  //   console.log("login")
  //   return (
  //     <Link to={"/"} />
  //   );
  // }
  // if (routeChooser == "myFunction1") {
  //   console.log("Post")
  //   setRouteChooser("");
  //   return (
  //     <Link to={"/Post "} />
  //   );
  // }
  // if (routeChooser == "myFunction2") {
  //   setRouteChooser("");
  //   console.log("Message")
  //   return (
  //     <Link to={"/Message"} />
  //   );
  // }

  return (

    <Nav
      // activeKey="/"
      //onSelect={(logout) => alert(`selected ${logout}`)}

      // onSelect={() => myFunction()}
      // onSelect={() => myFunction1()}
      // onSelect={() => myFunction2()}



      // onSelect={(selectedKey) => 
      //   {if (`${selectedKey}` == "selectedKey1") {
      //     console.log("2")
      //   }}
      //   }


      // onSelect={(selectedKey) => {
      //   if (`${selectedKey}` == "selectedKey") {
      //     setRouteChooser("myFunction")
      //     myFunction()
      //   }
      //   if (`${selectedKey}` == "selectedKey1") {
      //     setRouteChooser("myFunction1")
      //     myFunction1();
      //   }
      //   if (`${selectedKey}` == "selectedKey2") {
      //     setRouteChooser("myFunction2")
      //     myFunction2();
      //   }

      // }


      // }

    //onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}

    >
      
        <NavLink to="/"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          } {...myFunction} >Log out 
        </NavLink>
    

      <Nav.Item >
        <NavLink to="/Post"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          } >Post</NavLink>
      </Nav.Item>

      <Nav.Item >
        <NavLink to="/Message"
          className={isActive =>
            "nav-link" + (!isActive ? " unselected" : "")
          }>Message</NavLink>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Fadebook
        </Nav.Link>
      </Nav.Item>


      <form>
        <label>
          UserName: {props.userFade}
          <input type="text" value={val} />
        </label>

      </form>
    </Nav>
  );

}


export default Fadebook