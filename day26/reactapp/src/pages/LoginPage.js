import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Row,
  Button,
  Container,
  Col,
  Card,
  FormGroup,
  Form,
} from "react-bootstrap";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [cookie, setCookie] = useCookies(["token"]);
  let history = useHistory();

  useEffect(() => {
    if (cookie["token"]) {
      history.push("/home");
    }
  }, [cookie]);

  const onSubmit = (data) => {
    const fd = new FormData();
    fd.append("username", data.username);
    fd.append("password", data.password);
    UserLogin(fd);
  };
  const UserLogin = (data) => {
    axios
      .post("http://192.168.43.118:8000/api/token/", data)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setCookie("token", response.data["access"]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="my-5">
      <Row>
        <Col sm={4} className="mx-auto">
          <Card>
            <Card.Header>
              <h3>Login page</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter userame"
                    ref={register}
                  />
                </FormGroup>

                <FormGroup>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    ref={register}
                  />
                </FormGroup>
                <Button type="Submit" className="btn btn-block">
                  Login
                </Button>
                <p className="my-2">
                  Create an account? <Link to="/signup">Register here</Link>
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
