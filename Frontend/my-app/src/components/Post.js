import { Form, Button, InputGroup, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";


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

    <Form onSubmit={submitForm}>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Message"
          value={postText}
          onChange={handleChangePass}

        />
      </Form.Group>

      <Form.Group>
        <input className='btn btn-primary' type="submit" value="Submit" />
      </Form.Group>

    </Form>


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