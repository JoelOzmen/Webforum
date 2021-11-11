import React,{useState ,useEffect} from 'react'
import bootstrap from 'bootstrap'
import { Button } from 'react-bootstrap';


const RegButton=()=>{
    console.log("hello")
    return(
        <div className="d-grid gap-2">
            <Button variant="secondary" size="small">
                Register
            </Button>
        </div>
    )
}

export default RegButton;