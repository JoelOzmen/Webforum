import React,{useState ,useEffect} from 'react'
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';


const LoginButton=()=>{
    console.log("hello")
    return(
        <div className="d-grid gap-2">
            <Button variant="primary" size="small">
                Login
            </Button>
        </div>
    )
}

export default LoginButton;