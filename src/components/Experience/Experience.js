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
                            title="Backend Developer Intern"
                            company="MultiQoS"
                            duration="July'26 - Aug'26 · 2 months"
                            location="Ahmedabad, Gujarat"
                            description={[
                                "Built core Kuri backend workflows for reassignment, recurring courier, and marketplace operations using NestJS, Microservices, Kafka, and PostgreSQL",
                                "Dockerized 8–9 microservices for Grimmor and resolved CI/CD pipeline issues across quality checks, type/dependency advisory checks, builds, and production deployment, enabling automated deployments on code push",
                                "Implemented MyMarket's end-to-end Zerodha market-data flow, integrating APIs, decoding binary market data into readable structures, mapping real-time ticks to application requirements, and handling the flow from login through live market updates"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            title="Web Developer Intern"
                            company="Innovate MR"
                            duration="Jan'26 - June'26 · 6 months"
                            location="Ahmedabad, Gujarat"
                            description={[
                                "Built full-stack web applications using the MEAN stack, developing RESTful APIs with Node.js/Express and responsive Angular components using modern CSS practices",
                                "Participated in daily standups, sprint planning, and 15+ code reviews; implemented feedback to improve code quality",
                                "Debugged 8+ production issues reported by QA team in collaboration with senior developers"
                            ]}
                        />
                    </Col>

                    <Col md={6} className="project-card">
                        <ExperienceCard
                            title="Programming Intern"
                            company="Peersale Company Inc."
                            duration="July'24 - Sept'24 · 3 months"
                            location="Greensboro, NC"
                            description={[
                                "Designed 40+ test cases covering API behavior, validations, and edge cases for 6 application modules",
                                "Collaborated with backend developers to understand RESTful API design and database query optimization",
                                "Communicated technical findings clearly and proposed 5 optimization recommendations"
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