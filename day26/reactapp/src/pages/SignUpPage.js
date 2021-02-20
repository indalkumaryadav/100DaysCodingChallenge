import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Row,
  Button,
  Container,
  Col,
  Card,
  FormGroup,
  Form,
} from "react-bootstrap";

const SignUpPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const fd = new FormData();
    fd.append("username", data.username);
    fd.append("email", data.email);
    fd.append("password", data.password);
    UserSignUp(fd);
  };
  const UserSignUp = (data) => {
    axios
      .post("http://192.168.43.118:8000/api/users/", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container className="my-5">
      <Row>
        <Col sm={4} className="mx-auto">
          <Card>
            <Card.Header>
              <h3>Create an account</h3>
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
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
                  Register
                </Button>
                <p className="my-2">
                  Already have an account? <Link to="/">Login here</Link>{" "}
                </p>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
