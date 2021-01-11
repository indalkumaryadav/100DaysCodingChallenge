import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import MyModal from "./component/MyModel";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Login
      </Button>

      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default App;
