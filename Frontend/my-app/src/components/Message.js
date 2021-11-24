import { Form, Button, InputGroup,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState, useEffect } from 'react'
import { deleteAllCookies, getCookie } from './Cookies';
import { Alert } from 'bootstrap';
import { Link, Navigate } from "react-router-dom";


const Message = (props) =>{

    console.log("fadebook username: "+props.userFade)
    var val =getCookie(props.userFade);

    console.log("coockie value: "+val)


    return(
       
        <form>
        <label>
        FadeBook UserName: {props.userFade}
          <input type="text"  defaultValue={val}  />
        </label>
       
      </form>
    )

}


export default Message