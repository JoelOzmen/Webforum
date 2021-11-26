import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, Navigate, NavLink } from "react-router-dom";

import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import Message from './Message';
import Post from './Post';
import LoginForm from './Form/LoginForm';
import * as ReactBootStrap from "react-bootstrap"
import { eventNames } from 'process';












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


  const [postText, setPostText] = useState('')
  //const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPostText(e.target.value);


  const [username, setUsername] = useState('');


  function submitForm(event) {


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

          {/* <form>
            <label>
              UserName: {props.userFade}
              <input type="text" value={val} />
            </label>

          </form> */}

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

              <Form className="text-center" onSubmit={submitForm}>
                <h2>Find Users Posts</h2>

                <Form.Group className="mb-3" controlId="username" >
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleChange}
                  />
                </Form.Group>



                <input className='btn btn-primary' type="submit" value="Search" />

              </Form>

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
                  <th>Date</th>
                  <th>Post</th>

                </tr>
              </thead>
              <tbody>

                {props.data && props.data.data.map((data, index) => {
                  return <tr key={index}>
                    <td>{data.date}</td>
                    <td>{data.post}</td>

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