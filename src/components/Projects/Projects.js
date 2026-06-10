import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import amenity from '../../Assets/Projects/Amenity hub.png';
import cric from '../../Assets/Projects/cricfusion.png';
import cinepedia from '../../Assets/Projects/cinepedia.png';

function Projects() {
  return (
    <Container>
  <h1 className="project-heading">
    My Recent <strong className="purple">Works </strong>
  </h1>
  <p style={{ color: "white" }}>
    Here are a few projects I've worked on recently.
  </p>
  <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    
    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={amenity} // You can replace with your own image
        isBlog={false}
        title="AmenityHub - Society Booking System"
        description="Full-stack MEAN application enabling residents to book amenities with admin approval workflows. Features JWT authentication, 2FA using Twilio, real-time analytics dashboard, dynamic pricing engine, and automated email notifications."
        ghLink="https://github.com/parththakkar06/AmenityHub"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={cric}
        isBlog={false}
        title="Cricket Analytics Platform"
        description="Professional cricket management platform with live ball-by-ball scoring and ML-powered performance predictions. Built with Python Flask, featuring real-time data processing, advanced statistics generation, and predictive analytics using Machine Learning."
        ghLink="https://github.com/parththakkar06/Cricket-Analytics-and-Match-Management-System-with-ML-Based-Player-Performance-Prediction"
      />
    </Col>

    <Col md={4} className="project-card">
      <ProjectCard
        imgPath={cinepedia}
        isBlog={false}
        title="Cinepedia - Movie Booking App"
        description="Feature-rich Android application for browsing movies and booking tickets. Includes interactive seat selection system, user authentication, booking management, and Material Design UI. Built with Java and SQLite database."
        ghLink="https://github.com/parththakkar06/Cinepedia"
      />
    </Col>

  </Row>
</Container>
  );
}

export default Projects;
