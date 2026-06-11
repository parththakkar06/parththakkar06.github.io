import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Experience </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here's where I've worked and contributed.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            title="Web Developer Intern"
                            company="Innovate MR"
                            duration="Jan'26 - Present · 6 months"
                            location="Ahmedabad, Gujarat"
                            description={[
                                "Developing full-stack web applications using MERN stack (MongoDB, Express.js, React.js, Node.js)",
                                "Building RESTful APIs and implementing backend business logic",
                                "Creating responsive frontend interfaces with modern JavaScript frameworks",
                                "Collaborating with team on database design, optimization, and code reviews",
                                "Participating in agile development processes and sprint planning"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            title="Graphic Designer Lead"
                            company="CESA (Computer Engineering Students Association)"
                            duration="Jan'25 - Jan'26 · 1 year"
                            location="Indus University, Ahmedabad"
                            description={[
                                "Led the graphic design team for college's Computer Engineering department",
                                "Created visual content for events, workshops, and promotional materials",
                                "Designed posters, social media graphics, and branding materials",
                                "Coordinated with team members and managed design projects",
                                "Enhanced visual identity and engagement for technical events"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            title="Graphic Designer"
                            company="Rotaract Club of Bopal"
                            duration="June'24 - June'25 · 1 year"
                            location="Ahmedabad, Gujarat"
                            description={[
                                "Designed creative graphics for community service events and campaigns",
                                "Created social media content and promotional materials",
                                "Collaborated with club members on branding and marketing initiatives",
                                "Contributed to visual storytelling for social impact projects"
                            ]}
                        />
                    </Col>

                </Row>
            </Container>
        </Container>
    );
}

export default Experience;