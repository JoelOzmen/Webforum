import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./LoginButton.css"
import "./LoginForm.css"
import { setCookie } from '../Cookies';
import { Routes, Route,Navigate,useParams } from "react-router-dom";
import Fadebook from '../Fadebook';

const LoginForm = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [userID,setUserID] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameCoockies, setUsernameCoockies] = useState('')

  const handleChange = (e) => setUsername(e.target.value);
  const handleChangePass = (e) => setPassword(e.target.value);
  const handleID = (e) => setUserID(e.target.value);
  
  
  useEffect(() => {
    console.log("fuck youuuuu"+userID)
    if(userID !=null){ 
      setIsLoggedIn(true)
    }
    
  }, [userID]);


  function submitForm(event) 
  {
    
    let USERNAME = username;
    let PASSWORD = password
    event.preventDefault();

    //http://localhost:8090/api/users/login?${username=USERNAME}&${password=USERNAME}`

    const rawResponse = fetch('http://localhost:8090/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: USERNAME, password: PASSWORD})
    }).then(Response => Response.json()
    ).then((data) => {

        if (data.id!=null) {
          //setCookie(data.user,data.isLoggedIn,2) 
          setCookie(data.user,data.id,2)
        setUserID(data.id)
        setUsernameCoockies(data.user)
        //setIsLoggedIn(true)
        //setIsLoggedIn(true)
        //console.log(userID.id)
        //console.log(isLoggedIn)
        
          
        } else {
          alert("Wrong password or user does not exist!")
        }

      });
      
      
  }
//   //togs från internet!!!
//   function setCookie(name,value,days) {
//     var expires = "";
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime() + (days*24*60*60*1000));
//         expires = "; expires=" + date.toUTCString();
//     }
//     document.cookie = name + "=" + (value || "")  + expires + "; path=/";
// }
// //togs från internet!!!
// function getCookie(name) {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for(var i=0;i < ca.length;i++) {
//       var c = ca[i];
//       while (c.charAt(0)==' ') c = c.substring(1,c.length);
//       if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//   }
//   return null;
// }
const userNAme = usernameCoockies;
props.setUserFade(userNAme);
let {usernamee} = useParams();
console.log("kom igeeeeen "+ userNAme)
if (isLoggedIn) {
  return <Navigate to={"/Fadebook" }/>
 }

 
  return (
    <Form className="text-center" onSubmit={submitForm}>
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

      <input className='btn btn-primary' type="submit" value="Login" onChange={handleID}  />
      
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      {/* <div className="Buttons"> */}
        {/* <div className="LoginButton">
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div> */}
        <div className="RegisterButton">
          <Link to="/reg">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Link>
        </div>
      {/* </div> */}
    </Form>
  );
};

export default LoginForm;
