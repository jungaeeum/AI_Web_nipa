import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Container, Tab, Tabs, Col, Row, Image, Carousel, Button, Form, Card } from "react-bootstrap";

import "./App.css";
import "./Custom.css";

function App() {
  return (
    <div className="d-flex flex-column justify-content-between ">
      <h1 className="text-left" style={{ marginLeft: "50px", marginTop: "20px", marginBottom: 0 }}>
        My Portfolio
      </h1>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 justify-content-end">
        <Tab eventKey="about" title="About">
          <Container id="about">
            <Row className="w-120 mt-5">
              <Col className="text-start">
                <h3 className="about__category ">About Me</h3>
                <p className="mt-4 mb-5 p_text">
                  I am JungAe from Gimpo, Republic of Korea. I am studying programming as a fontend developer for the past one year.
                </p>
                <p className="mt-4 mb-5 p_text">
                  I got featured various times on many big and small marketplaces, portfolio websites and blogs. I also received some awards and recognitions
                  from some of the big and small award companies. Besides programming, I like to write poems, stories and sing songs.
                </p>
                <Button variant="warning" className="about_btn">
                  Resume
                </Button>{" "}
              </Col>
              <Col className="text-center">
                {/* 이미지 파일의 경로는 public을 기본으로 한다. */}
                <Image src="./img/KakaoTalk_profile.jpg" alt="프로필 사진" className="custom-image" roundedCircle />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="portfolio" title="Portfolio">
          <Container id="portfolio">
            <Row className="py-5">
              <Col>
                <h2 className="heading">Projects</h2>
              </Col>
              <Row>
                <Col>
                  <Card className="card">
                    <Card.Img variant="right" src="./img/Logo_Final.png" className="card_img" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Button variant="primary">View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="card">
                    <Card.Img variant="right" src="./img/Healing.png" className="card_img" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Button variant="primary">View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="card">
                    <Card.Img variant="right" src="./img/Trippian.png" className="card_img" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Button variant="primary">View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="card">
                    <Card.Img variant="right" src="./img/Crosswalk.jpeg" className="card_img" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                      <Button variant="primary">View Project</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Row>
            <Row className="mt-5 text-center clients">
              <h3>Some Generous Words</h3>
              <p>Some of my favorite testimonials from my clients</p>
              <Carousel className="w-75 m-auto d-flex" nextIcon={<BsChevronRight />} prevIcon={<BsChevronLeft />}>
                <Carousel.Item className="d-flex justify-content-center">
                  <div className="car_context">
                    <p>
                      I had grown a little bit disappointed when I realized that my work would not be taking me in any new, creative design directions.
                      <br />
                      Thankfully, I found Shambhavi Mishra and his creativity that goes above and beyond, proving to be exactly what I needed to take.
                    </p>
                    <h3>Aika Chan</h3>
                  </div>
                  <div>
                    <p>
                      Shambhavi Mishra is the best designer that I have ever worked with. He is seriously what you would call 'creative': he innovatively solves
                      <br />
                      all sorts of problems and always delivers both prompt and high quality work. I can't recommend him enough!
                    </p>
                    <h3>Arakan Chan</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="md={6} justify-content-center">
                  <div className="car_context">
                    <p>
                      I got featured various times on many big and small marketplaces, portfolio websites and blogs. I also received some awards and
                      recognitions from some of the big and small award companies.
                      <br />
                      Besides designing, I like to write poems, stories and sing songs.
                    </p>
                    <h3>sdfsdfsdf</h3>
                  </div>
                  <div>
                    <p>
                      I got featured various times on many big and small marketplaces, portfolio websites and blogs. I also received some awards and
                      recognitions from some of the big and small award companies. Besides designing, I like to write poems, stories and sing songs.
                      <br />
                      all sorts of problems and always delivers both prompt and high quality work. I can't recommend him enough!
                    </p>
                    <h3>Losf dkfwd</h3>
                  </div>
                </Carousel.Item>
                <Carousel.Item className="md={6} justify-content-center">
                  <div className="car_context">
                    <p>
                      I had grown a little bit disappointed when I realized that my work would not be taking me in any new, creative design directions.
                      <br />
                      Thankfully, I found Shambhavi Mishra and his creativity that goes above and beyond, proving to be exactly what I needed to take.
                    </p>
                    <h3>Aika Chan</h3>
                  </div>
                  <div>
                    <p>
                      Shambhavi Mishra is the best designer that I have ever worked with. He is seriously what you would call 'creative': he innovatively solves
                      <br />
                      all sorts of problems and always delivers both prompt and high quality work. I can't recommend him enough!
                    </p>
                    <h3>Arakan Chan</h3>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Container id="contact">
            <Row className="py-5">
              <Col>
                <h2 className="heading">Let’s work together and make everything super cute and super useful.</h2>
              </Col>
              <Col className="justify-content-end py-2">
                <img className="w-100" src="./img/profile.png" alt="Profile" />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col className="text-center border border-light px-0">
                <h3 style={{ margin: 0, padding: 3 }}>Projects</h3>
                <div style={{ borderTop: "5px solid orange", width: "100px", margin: "auto" }}></div>
              </Col>
            </Row>
            <Row className="justify-content-center py-5">
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
              </Form>
              <Row className="justify-content-end py-2">
                <Button variant="warning" className="contact_btn">
                  Send
                </Button>
              </Row>
            </Row>
          </Container>
        </Tab>
      </Tabs>
      {/* <h1>자기소개앱 만들기 (about부터 누르세요)</h1> */}
      <Row className="justify-content-center m-auto mt-5">
        <div className="d-flex flex-row">
          <img src="./img/instagram.png" alt="instagram" className="icon"></img>
          <img src="./img/linkedin.png" alt="linkedin" className="icon"></img>
          <img src="./img/email.png" alt="email" className="icon"></img>
        </div>
      </Row>
      <Row className="justify-content-center mt-4 " style={{ color: "#828282" }}>
        Copyright © JungAe Eum. All Right Reserved.
      </Row>
      ;
    </div>
  );
}

export default App;
