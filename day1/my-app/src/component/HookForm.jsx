import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Form,
  FormGroup,
  CardTitle,
  CardBody,
  Input,
  Button,
} from "reactstrap";

const onSubmit = (data) => {
  console.log(data);
};
const HookForm = (props) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Container className="my-5">
      <Row>
        <Col md={5} className="mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <h4 className="text-center text-primary">Register User</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <label htmlFor="firstname">First Name : </label>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    placeholder="Enter First Name.."
                    ref={register}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="lastname">Last Name : </label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    placeholder="Enter Last Name.."
                    ref={register}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email : </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter email.."
                    ref={register}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="password">Password : </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Enter password.."
                    ref={register}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="confirm_password">Confirm Password : </label>
                  <input
                    className="form-control"
                    type="password"
                    name="confirm_password"
                    placeholder="Enter confirm password.."
                    ref={register}
                  />
                </FormGroup>
                <FormGroup>
                  <div class="custom-file mb-3">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="validatedCustomFile"
                      required
                      ref={register({ required: "this fields is mist" })}
                    />
                    <label class="custom-file-label" for="validatedCustomFile">
                      Choose file...
                    </label>
                    <div class="invalid-feedback">
                      Example invalid custom file feedback
                    </div>
                  </div>
                </FormGroup>

                <Button
                  type="submit"
                  className="btn btn-outline-success btn-block"
                  style={{
                    color: "white",
                  }}
                >
                  Register
                </Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HookForm;
