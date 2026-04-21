import { Container, Row, Col, Card } from "react-bootstrap";

interface ProjectCardProps {
  isBlog?: boolean;
  title: string;
  description: string;
  ghLink?: string;
  demoLink?: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Link href={props.ghLink} target="_blank">
          GitHub
        </Card.Link>
        <Card.Link href={props.demoLink} target="_blank">
          Demo
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;