import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Card } from "react-bootstrap";

const Title = styled.h1`
  background-color: red;
  font-size: 50px;
  color: white;
  text-align: center;
`;

const MyButton = styled(Button)`
  width: 120px;
  height: 50px;
  border: none;
  color: ${(props) => (props.primary ? "blue" : "purple")};
  &:hover {
    color: wheat;
    background-color: green;
  }
`;

const Header = () => {
  const MyContainer = styled(Container)`
    background-color: red;
  `;
  const ShopCard = styled(Card)`
    border-radius: 20px;
  `;
  const CardTitle = styled.h3`
    font-size: 25px;
    color: blue;
    text-align: center;
  `;
  return (
    <div>
      <Title>My Style Color</Title>
      <MyButton>Hello There</MyButton>
      <MyContainer>
        <h2>Hilrtytr</h2>
      </MyContainer>
      <ShopCard>
        <CardTitle>Howllothits</CardTitle>
        <Card.Footer>
          <MyButton>Add to Cart</MyButton>
        </Card.Footer>
      </ShopCard>
    </div>
  );
};

export default Header;
