//import React,{} from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegisterButton.css"
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

let islogged = true;

const RegForm = (props) => {

  //const [username, setUsername] = useState("")
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  // function submit() {
  //   console.log(username)
  //   console.log(password)
  //   console.log(islogged)
  //   islogged = true;
  //   console.log(islogged)
  //   alert("hej")
  //   return;

  // }

  function submitForm(event) 
  {
    let USERNAME = username;
    let PASSWORD = password
    //alert(`${PASSWORD} ${USERNAME}`);
    event.preventDefault();


    const rawResponse = fetch('http://localhost:8090/api/users/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: USERNAME, password: PASSWORD})
    });
    console.log(rawResponse)
    
  }

  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);

  console.log(props)

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