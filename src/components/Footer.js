import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
      // Around line 20-30

<Col md="4" className="footer-copywright">
  <h3>Designed and Developed by Parth Thakkar</h3>
</Col>
<Col md="4" className="footer-copywright">
  <h3>Copyright © 2026 Parth Thakkar</h3>
</Col>
<Col md="4" className="footer-body">
  <ul className="footer-icons">
    <li className="social-icons">
      <a
        href="https://github.com/parththakkar06"
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://www.linkedin.com/in/parth-thakkar-258354226"
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="mailto:parththakkar1013@gmail.com"
        style={{ color: "white" }}
        target="_blank" 
        rel="noopener noreferrer"
      >
        <AiOutlineMail />
      </a>
    </li>
  </ul>
</Col>
      </Row>
    </Container>
  );
}

export default Footer;
