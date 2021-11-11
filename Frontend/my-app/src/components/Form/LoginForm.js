import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./LoginButton.css"

const LoginForm = () => {
  return (
    <Form>
      <h2>Log in</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <div className="Buttons">
        <div className="LoginButton">
          <Button variant="primary" type="submit">
            Log in
          </Button>
        </div>
        <div className="RegisterButton">
          <Link to="/reg">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
