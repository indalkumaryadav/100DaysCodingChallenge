import React, { useState } from "react";
import "./App.css";
import Carousel from "react-elastic-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button } from "react-bootstrap";
import Form from "./component/Form";
import Header from "./component/Header";
import Footer from "./component/Footer";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function App() {
  const [state, setState] = useState([
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
    { name: "indal kumar", age: 20, img_url: "https://picsum.photos/200/300" },
  ]);

  return (
    <Container>
      <Header />
      {/* <Container>
        <h3 style={{ display: "inline" }}>User List</h3>
        <a style={{ float: "right", marginTop: 5 }} href="#">
          View More
        </a>
      </Container>
      <Carousel breakPoints={breakPoints}>
        {state.map((user) => {
          return (
            <Container>
              <Card style={{ width: 400, height: 400 }}>
                <Card.Body>
                  <img
                    src={user.img_url}
                    style={{ width: "100%", height: 200 }}
                  />
                  <p>{user.name}</p>
                  <h4>Age :{user.age}</h4>
                </Card.Body>
                <Card.Footer className="p-0 ">
                  <Button className="btn btn-block">
                    Clik Here to Show More
                  </Button>
                </Card.Footer>
              </Card>
            </Container>
          );
        })}
      </Carousel> */}

      <Form />
      <Footer />
    </Container>
  );
}

export default App;
