import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import { SiAndroidstudio, SiEclipseide, SiSpringboot } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-images">
          <SiAndroidstudio/>
        </div>
        <div className="tech-icons-text">Android Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-images">
          <SiEclipseide/>
        </div>
        <div className="tech-icons-text">Eclipse IDE</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-images">
          <SiSpringboot/>
        </div>
        <div className="tech-icons-text">Spring Tool Suite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
