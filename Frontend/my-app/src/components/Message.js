import { Form, Button, InputGroup, NavContainer, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"


const Message = (props) => {

  console.log("fadebook username: " + props.userFade)
  var val = getCookie(props.userFade);
  console.log("coockie value: " + val)

  const [username, setUsername] = useState('');
  const [messageText, setMessageText] = useState('')
  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setMessageText(e.target.value);


  function submitForm(event) {


  }


  return (
    <div className="Message">

      <Container>
        <Row>


          <Col><Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Receiver</Form.Label>
              <Form.Control
                type="text"
                placeholder="Receiver"
                value={username}
                onChange={handleChange}

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Message"
                value={messageText}
                onChange={handleChangePass}


              />
            </Form.Group>

            <Form.Group>
              <input className='btn btn-primary' type="submit" value="Submit" />
            </Form.Group>

          </Form></Col>
          <Col> </Col>
        </Row>
      </Container>

      <p>&nbsp;</p>


      <Container>
        <Row>
          <Col><h2>My Messages </h2><ReactBootStrap.Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Username</th>
                <th>Date</th>
                <th>Message</th>

              </tr>
            </thead>
            <tbody>


              {props.data && props.data.data.map((data, index) => {
                return <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.date}</td>
                  <td>{data.message}</td>

                </tr>

              })}
            </tbody>
          </ReactBootStrap.Table></Col>

        </Row>

      </Container>
    </div>

    //   <form>
    //   <label>
    //   FadeBook UserName: {props.userFade}
    //     <input type="text"  defaultValue={val}  />
    //   </label>

    // </form>
  )

}


export default Message