import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const PROJECTS = [
  {
    imgPath: bitsOfCode,
    title: "Chatify",
    description:
      "Real-time chat workspace built with React.js, Material-UI, and Firebase. Supports messaging, image sharing, and message reactions.",
    ghLink: "",
    demoLink: "",
  },
  {
    imgPath: bitsOfCode,
    title: "Bits-0f-C0de",
    description:
      "Personal blog built with Next.js and Tailwind CSS. Renders markdown content with dark mode support.",
    ghLink: "",
    demoLink: "",
  },
  {
    imgPath: bitsOfCode,
    title: "Editor.io",
    description:
      "Online code and markdown editor with live preview. Supports HTML, CSS, JS and auto-saves to Local Storage.",
    ghLink: "",
    demoLink: "",
  },
  {
    imgPath: leaf,
    title: "Plant AI",
    description:
      "Image classifier trained on Kaggle plant disease dataset using PyTorch + ResNet34. Achieved 98% accuracy across 38 plant classes.",
    ghLink: "#",
    demoLink: "#",
  },
  {
    imgPath: leaf,
    title: "AI Model",
    description:
      "Advanced machine learning model built with cutting-edge algorithms for real-world problem solving.",
    ghLink: "",
    demoLink: "",
  },
  {
    imgPath: leaf,
    title: "Emotion Detection",
    description:
      "CNN trained on FER-2013 with Keras; Open-CV pipeline for real-time face detection and emotion classification.",
    ghLink: "",
    demoLink: "#",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>

        <motion.div style={{ textAlign: "center", marginBottom: 56 }} {...fadeUp(0)}>
          <p className="about-label" style={{ display: "inline-block", marginBottom: 16 }}>
            Portfolio
          </p>
          <h1 className="project-heading">
            My Recent <span className="purple">Works</span>
          </h1>
          <p style={{ color: "rgba(200,215,240,0.5)", fontSize: "1.05rem", marginTop: 12 }}>
            A few things I've shipped recently.
          </p>
        </motion.div>

        <Row style={{ justifyContent: "center" }}>
          {PROJECTS.map((proj, i) => (
            <Col key={proj.title} md={4} className="project-card" style={{ marginBottom: 30 }}>
              <motion.div {...fadeUp(i * 0.08)} style={{ height: "100%" }}>
                <ProjectCard {...proj} isBlog={false} />
              </motion.div>
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
