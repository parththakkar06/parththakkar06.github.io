import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", fontSize: "1.5em" }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle style={{ 
          color: "#c770f0", 
          marginBottom: "15px",
          fontSize: "1.1em"
        }}>
          {props.company}
        </Card.Subtitle>
        <Card.Text style={{ fontSize: "0.95em", marginBottom: "5px" }}>
          📅 {props.duration}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.95em", marginBottom: "20px" }}>
          📍 {props.location}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description.map((point, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <ImPointRight /> {point}
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;