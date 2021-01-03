import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import { Container, Card, CardBody, Col, Row, CardHeader } from "reactstrap";
export default class Home extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <Container>
        <div className="clearfix">
          <h4 className="float-left">Container</h4>
          <a href="#" className="float-right">
            LInk All
          </a>
        </div>
        <Slider {...settings}>
          <div>
            <Card className="m-1">
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="m-1">
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="m-1">
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className="m-1">
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <img src="https://picsum.photos/200/300" />
              </CardHeader>
              <CardBody>
                <h5>Hello card it is</h5>
              </CardBody>
            </Card>
          </div>
        </Slider>
      </Container>
    );
  }
}
