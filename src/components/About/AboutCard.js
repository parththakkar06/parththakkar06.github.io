import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Parth Thakkar </span>
            from <span className="purple"> Ahmedabad, Gujarat, India.</span>
            <br />
            <br />
            I am currently working as a <span className="purple">Web Developer Intern</span> at
            <span className="purple"> Innovate MR</span>, building production-ready MERN stack applications.
            <br />
            <br />
            I am pursuing B.Tech in Computer Engineering from Indus University
            with a CGPA of <span className="purple">9.34/10.0</span>.
            <br />
            <br />
            Beyond development, I bring a creative edge from my design background -
            I served as <span className="purple">Graphic Designer Lead at CESA</span> (my college's
            Computer Engineering Students Association) and worked as a
            <span className="purple"> Graphic Designer at Rotaract Club of Bopal</span> for a year,
            creating impactful visual content using Canva.
            <br />
            <br />
            This blend of technical and design skills helps me build
            <span className="purple"> user-centric, visually appealing applications</span>.
            <br />
            <br />
            Apart from coding and designing, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Parth</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
