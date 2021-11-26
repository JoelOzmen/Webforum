import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"


const Post = (props) => {

  console.log("fadebook username: " + props.userFade)
  var val = getCookie(props.userFade);

  console.log("coockie value: " + val)

  const [username, setUsername] = useState('');
  const [postText, setPostText] = useState('')
  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPostText(e.target.value);


  function submitForm(event) {


  }

  return (
    <div className="Post">

      <Container>
        <Col><h2>Usersname {props.userFade} posts</h2><ReactBootStrap.Table striped bordered hover size="sm">
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

      </Container>

    </div>

    //   <form>
    //   <label>
    //   FadeBook UserName: {props.userFade}
    //     <input type="text" value={val}  />
    //     <input type="text"  defaultValue={val}  />
    //   </label>

    // </form>
  )

}


export default Post