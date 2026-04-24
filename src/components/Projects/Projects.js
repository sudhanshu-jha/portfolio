import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div
          style={{
            transform: "perspective(1000px) rotateX(-5deg)",
            transformStyle: "preserve-3d",
            animation: "slideInDown 1s ease-out",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h1
            className="project-heading"
            style={{
              fontSize: "2.8em",
              textShadow: "0 15px 30px rgba(192, 132, 245, 0.4)",
              transform: "translateZ(30px)",
              background: "linear-gradient(45deg, #c084f5, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
            }}
          >
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              transform: "translateZ(20px)",
              textShadow: "0 5px 10px rgba(192, 132, 245, 0.2)",
              lineHeight: "1.6",
            }}
          >
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateY(-5deg)",
                transformStyle: "preserve-3d",
                animation: "slideInLeft 1s ease-out 0.2s both",
              }}
            >
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Chatify"
                description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                ghLink=""
                demoLink=""
              />
            </div>
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateX(5deg)",
                transformStyle: "preserve-3d",
                animation: "slideInUp 1s ease-out 0.4s both",
              }}
            >
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Bits-0f-C0de"
                description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                ghLink=""
                demoLink=""
              />
            </div>
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateY(5deg)",
                transformStyle: "preserve-3d",
                animation: "slideInRight 1s ease-out 0.6s both",
              }}
            >
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Editor.io"
                description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                ghLink=""
                demoLink=""
              />
            </div>
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateY(-3deg)",
                transformStyle: "preserve-3d",
                animation: "slideInLeft 1s ease-out 0.8s both",
              }}
            >
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Plant AI"
                description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
                ghLink="#"
                demoLink="#"
              />
            </div>
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateX(-5deg)",
                transformStyle: "preserve-3d",
                animation: "slideInUp 1s ease-out 1s both",
              }}
            >
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="AI Model"
                description="Advanced machine learning model built with cutting-edge algorithms for real-world problem solving."
                ghLink=""
                demoLink=""
              />
            </div>
          </Col>

          <Col md={4} className="project-card" style={{ marginBottom: "30px" }}>
            <div
              style={{
                transform: "perspective(1000px) rotateY(3deg)",
                transformStyle: "preserve-3d",
                animation: "slideInRight 1s ease-out 1.2s both",
              }}
            >
              <ProjectCard
                imgPath={leaf}
                isBlog={false}
                title="Face Recognition and Emotion Detection"
                description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                ghLink=""
                demoLink="#"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(-45deg) translateY(-100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(-5deg) translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(-45deg) translateX(-100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(-5deg) translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(45deg) translateX(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(5deg) translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(45deg) translateY(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(5deg) translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}

export default Projects;
