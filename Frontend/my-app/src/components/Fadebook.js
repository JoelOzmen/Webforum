import { Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react'
import { getCookie } from './Cookies';

const Fadebook = (props)=>{

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

export default Fadebook