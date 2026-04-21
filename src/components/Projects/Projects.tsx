import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              isBlog={false}
              title="Restaurant website"
              description="Developed a modern restaurant website for New Yamanishi Ordering experience using Next.js, featuring responsive design, dynamic content, and seamless booking integration. The site successfully launched and is now live, bringing their Japanese-inspired izakaya-style dining to life online"
              demoLink="https://newyamanishi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title=""
              description=""
              ghLink="https://github.com/sugityan/manage_food_expensive"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="A health management app for vegans"
              description="This is team build application for 3 days internship"
              ghLink="https://github.com/sugityan/mti_portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;