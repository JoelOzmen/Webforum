import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie,setCookie } from './Cookies';
import { Alert } from 'bootstrap';
import Message from './Message';
import Post from './Post';
import LoginForm from './Form/LoginForm';
import * as ReactBootStrap from "react-bootstrap"
import { eventNames } from 'process';

  const Fadebook = (props) => {
  const [routeChooser, setRouteChooser] = useState('');
  const [logged, setLogged] = useState(false);
  const handleChange = (e) => setLogged(false);
    
  var val = getCookie(props.userFade);

  const [postText, setPostText] = useState('')
  const handleChangePass = (e) => setPostText(e.target.value);
  const [username, setUsername] = useState('');
  const[userPost,setUserPost] = useState([]);
  const [text, setText] = useState('');
  const [userId, setUserId] = useState(null);


  function submitForm(event) {}

  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch(`http://localhost:8080/api/users/user/${val}/posts`);
       const body = await result.json();
       setUserPost(body);
      } 
      catch(err) {
        console.log(err)
        // error handling code
      } 
    }
  
    // call the async fetchData function
    fetchData()
  
  }, [])


  const [userID, setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameCoockies, setUsernameCoockies] = useState('')

  function submitForm(event) {
    let TEXT = postText;
    let USERID = val;
    event.preventDefault();

  const rawResponse = fetch('http://localhost:8080/api/post/publish', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: TEXT, userId: USERID })
    })
      .then(Response => Response.json()
      ).then(Response => {
        console.log("bug teesssst   ", Response)
      })
      .catch(rejected => {
        alert("User already exist or wrong password")
      });
    }



  return (
    <div className="Fadebook" >

      <div className="navs">


        <Nav>

          <NavLink to="/"
            className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            } >Log out
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

          {}

        </Nav>
      </div>

      <div className="CreatePost">

        <Container>
          <Row>

            <Col><Form onSubmit={submitForm}>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Create a Post</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Post"
                  value={postText}
                  onChange={handleChangePass}

                />
              </Form.Group>

              <Form.Group>
                <input className='btn btn-primary' type="submit" value="Submit" />
              </Form.Group>

            </Form></Col>
            <Col>  </Col>
            <Col><h2>Fadename: {props.userFade} </h2> </Col>
            <Col>  </Col>
            <Col>

              {}

            </Col>

          </Row>
        </Container>
      </div>
      <p>&nbsp;</p>


      <div className="AllPosts">
        <Container>
          <Row>
            <Col><h2>My Posts </h2><ReactBootStrap.Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Post</th>
                  <th>Date</th>

                </tr>
              </thead>
              <tbody>

                {userPost.map((userPost, index) => {
                  return <tr key={index}>
                    <td>{userPost.text}</td>
                    <td>{userPost.date}</td>

                  </tr>

                })}
              </tbody>
            </ReactBootStrap.Table></Col>
          </Row>
        </Container>
      </div>

    </div>

  );

}


export default Fadebook
