//import React,{} from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegisterButton.css"
import React, { useState, useEffect } from 'react'
import { Link, Navigate } from "react-router-dom";
import { setCookie } from '../Cookies';
import Fadebook from '../Fadebook';

let islogged = true;

const RegForm = (props) => {

  //const [username, setUsername] = useState("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [userID,setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameCoockies, setUsernameCoockies] = useState('')

  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);
  const handleID = (e) => setUserID(e.target.value);
  

 
  useEffect(() => {
    console.log("fuck youuuuu"+userID)
    if(userID !=null){ 
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
    
  }, [userID]);

  function submitForm(event) 
  {
    let USERNAME = username;
    let PASSWORD = password
    //alert(`${PASSWORD} ${USERNAME}`);
    event.preventDefault();


     fetch('http://localhost:8090/api/users/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: USERNAME, password: PASSWORD})
    })
    .then(res => res.json())
    .then(data => {

      if (data.id!=null) {
      setUserID(data.id);
      setCookie(data.user,data.id,2)
      setUsernameCoockies(data.user)
      console.log(data)
      }
      // do something with data
    })
    .catch(rejected => {
        alert("User already exist or wrong password")
    });
    

    
  }

  

  console.log(isLoggedIn)

const userNAme = usernameCoockies;
console.log("vaaaaarför"+ userNAme)
props.setUserFade(userNAme);

if (isLoggedIn) {
  return <Navigate to={"/FadeBook" }/>
 }




  return (
    <Form className="text-center" onSubmit={submitForm}>
      <h2>Register User</h2>

      <Form.Group className="mb-3" controlId="username" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChangePass}
        />
      </Form.Group>

      <input className='btn btn-primary' type="submit" value="Register" />

        {/* <form action='localhost:8090/register' method='post'>
          <input type="text" placeholder="Username" />
          <input type="submit" value="Submit"
            className="btn btn-primary"
            type="submit" />
        </form> */}
    </Form>
  );
}

export default RegForm