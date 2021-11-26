import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./LoginButton.css"
import "./LoginForm.css"
import { setCookie } from '../Cookies';
import { Routes, Route, Navigate } from "react-router-dom";
import Fadebook from '../Fadebook';

const LoginForm = (props) => {

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
    }


  }, [userID]);


  function submitForm(event) {

    let USERNAME = username;
    let PASSWORD = password
    event.preventDefault();

    //http://localhost:8090/api/users/login?${username=USERNAME}&${password=USERNAME}`

    const rawResponse = fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: USERNAME, password: PASSWORD })
    }).then(Response => Response.json()
    ).then((data) => {

      if (data.id != null) {
        //setCookie(data.user,data.isLoggedIn,2) 
        setUserID(data.id)
        setCookie(data.user, data.id, 2)
        setUsernameCoockies(data.user)

      } else {
        alert("Wrong password or user does not exist!")
      }

    });


  }

  const userNAme = usernameCoockies;
  props.setUserFade(userNAme);

  //console.log("Loginform "+ userNAme)
  if (isLoggedIn) {
    return <Navigate to={"/Fadebook"} />
  }


  return (
    <Container>
      <Row>
        <Col><Form className="text-center" onSubmit={submitForm}>
          <h2>Login</h2>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label >Username</Form.Label>
            <Form.Control
              placeholder="Username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              value={password}
              onChange={handleChangePass}
            />

          </Form.Group>

          <Form.Group className="mb-3" controlId="login">
            {/* <Form.Control  className='btn btn-primary' type="submit" value="Login" onChange={handleID} /> */}
            <input className='btn btn-primary' type="submit" value="Login" onChange={handleID} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Link to="/reg">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </Link>

          </Form.Group>
        </Form></Col>

      </Row>
    </Container>
  );
};

export default LoginForm;
