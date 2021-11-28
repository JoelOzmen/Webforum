import { Form, Button, InputGroup, NavContainer, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"


const Message = (props) => {

  //console.log("fadebook username: " + props.userFade)
  var val = getCookie(props.userFade);
  //console.log("coockie value: " + val)

  const [username, setUsername] = useState('');
  const [messageText, setMessageText] = useState('')
  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setMessageText(e.target.value);

  const[allMessage,setAllMessage] = useState();
  const[allMessage1,setAllMessage1] = useState();
  

  const [message, setMessage] = useState('')


  function submitForm(event) {


  }

  function submitForm(event) {
    let TEXT = messageText;
    let USERID = val;
    let DATE =Date.now()
    let USERNAME = username;
    event.preventDefault();


    const rawResponse = fetch('http://localhost:8080/api/message/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: TEXT,senderId: USERID,receiverId: USERNAME })
    })
      .then(response => {
        if(response.ok){
          return response.json()
        }
        throw response
      } 
      )
      .catch(rejected => {
        alert("Wrong post input")
      });

      
  }

  


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //      const result = await fetch(`http://localhost:8080/api/users/user/${val}/messages`);
  //      const body = await result.json();
  //      setAllMessage(body);
  //     } catch(err) {
  //       // error handling code
  //     } 
  //   }
  
  //   // call the async fetchData function
  //   fetchData()
  
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch(`http://localhost:8080/api/users/user/${val}/messages/received`);
       const body = await result.json();
       setAllMessage(body);
      } catch(err) {
        // error handling code
      } 
    }
  
    // call the async fetchData function
    fetchData()
  
  }, [])
 

  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch(`http://localhost:8080/api/users/user/${val}/messages/sent`);
       const body = await result.json();
       setAllMessage1(body);
      } catch(err) {
        // error handling code
      } 
    }
  
    // call the async fetchData function
    fetchData()
  
  }, [])


  


  return (
    <div className="Message">

      <Container>
        <Row>


          <Col><Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Receiver ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Receiver ID"
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
          <Col><h2>My Messages Received </h2><ReactBootStrap.Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Content</th>
                <th>Sender ID</th>
                <th>Receiver ID</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>


              {allMessage && allMessage.map((allMessage, index) => {
                return <tr key={index}>
                  <td>{allMessage.text}</td>
                  <td>{allMessage.senderId}</td>
                  <td>{allMessage.receiverId}</td>
                  <td>{allMessage.date}</td>

                  

                </tr>
                

                

              })}
            </tbody>
          </ReactBootStrap.Table></Col>

        </Row>

      </Container>

      <Container>
        <Row>
          <Col><h2>My Messages Sent </h2><ReactBootStrap.Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Content</th>
                <th>Sender ID</th>
                <th>Receiver ID</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>


              {allMessage1 && allMessage1.map((allMessage1, index) => {
                return <tr key={index}>
                  <td>{allMessage1.text}</td>
                  <td>{allMessage1.senderId}</td>
                  <td>{allMessage1.receiverId}</td>
                  <td>{allMessage1.date}</td>

                  

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