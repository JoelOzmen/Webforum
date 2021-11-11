import React,{useState ,useEffect} from 'react'
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginButton=()=>{
    console.log("hello")
    return(
        <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
                Login
            </Button>
           

        </div>
    )
}

export default LoginButton;