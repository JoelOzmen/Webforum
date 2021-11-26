//import React,{} from 'react'
import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
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
  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameCoockies, setUsernameCoockies] = useState('')

  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);
  const handleID = (e) => setUserID(e.target.value);

  useEffect(() => {
    if (userID != null) {
      setIsLoggedIn(true)
      //setUsernameCoockies(username)
    }

  }, [userID]);

  function submitForm(event) {
    let USERNAME = username;
    let PASSWORD = password
    event.preventDefault();


    const rawResponse = fetch('http://localhost:8080/api/users/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: USERNAME, password: PASSWORD })
    })
      .then(Response => Response.json()
      ).then(data => {

        setUserID(data.id);
        setCookie(username, data.id, 2)
        setUsernameCoockies(username)

      })
      .catch(rejected => {
        alert("User already exist or wrong password")
      });

  }

  props.setUserFade(username);

  if (isLoggedIn) {
    return <Navigate to={"/FadeBook"} />
  }

  return (
    <Container>
      <Row>
        <Col><Form className="text-center" onSubmit={submitForm}>
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

        </Form></Col>
      </Row>
    </Container>
  );
}

export default RegForm