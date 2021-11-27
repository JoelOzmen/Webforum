import { Form, Button, InputGroup, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap"


const Post = (props) => {

  // console.log("fadebook username: " + props.userFade)
  // var val = getCookie(props.userFade);

  // console.log("coockie value: " + val)

  // const [username, setUsername] = useState('');
  // const [postText, setPostText] = useState('')
  // const handleChange = (e) => setUsername(e.target.value);
  // const handleChangePass = (e) => setPostText(e.target.value);


  // function submitForm(event) {


  // }

  let id = window.prompt("Enter Id of user you want to see post on");
  console.log(id);
  
  const[userPost,setUserPost] = useState([]);
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       const result = await fetch(`http://localhost:8080/api/users/user/${id}/posts`);
       const body = await result.json();
       console.log(body)
       setUserPost(body);
      } catch(err) {
        // error handling code
      } 
    }
  
    // call the async fetchData function
    fetchData()
  
  }, [])

  return (
    <div className="Post">

<Container>
          <Row>
          <h2>User: {id} </h2>
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