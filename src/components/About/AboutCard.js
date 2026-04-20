import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Kota Sugiyama</span>{" "}
            from <span className="purple">Tokyo, Japan</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Accenture</span>.
            <br />I hold an Integrated M.Sc. in{" "}
            <span className="purple">Data Science and Computing</span> from{" "}
            <span className="purple">Sophia University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AI Search 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading 💰
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Learning New Language 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a imspiring!"{" "}
          </p>
          <footer className="blockquote-footer">Kota Sugiyama</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
