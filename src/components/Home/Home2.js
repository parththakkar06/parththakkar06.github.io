import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
      I'm a passionate Full Stack Developer specializing in 
      <b className="purple"> MERN Stack </b> development.
      <br />
      <br />I am proficient in
      <i>
        <b className="purple"> JavaScript, Java, Python, and C++. </b>
      </i>
      <br />
      <br />
      My areas of interest include building &nbsp;
      <i>
        <b className="purple">Web Applications, REST APIs, </b> and
        products related to{" "}
        <b className="purple">
          E-commerce and Analytics Platforms.
        </b>
      </i>
      <br />
      <br />
      I develop scalable backend systems with <b className="purple">Node.js</b> and
      modern frameworks like
      <i>
        <b className="purple">
          {" "}
          React.js, Angular, and Spring Boot
        </b>
      </i>
      <br />
      <br />
      Currently working as a <b className="purple">Web Developer Intern</b> at 
      <b className="purple"> Innovate MR</b>, building production-ready applications.
    </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
