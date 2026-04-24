import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <div
          style={{
            transform: "perspective(1000px) rotateX(-5deg)",
            transformStyle: "preserve-3d",
            animation: "slideInDown 1s ease-out",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              color: "white",
              padding: "20px",
              textAlign: "center",
              fontSize: "2.8em",
              textShadow: "0 15px 30px rgba(192, 132, 245, 0.4)",
              transform: "translateZ(30px)",
              background: "linear-gradient(45deg, #c084f5, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About <span className="purple">Me</span>
          </h1>
        </div>

        <div
          style={{
            transform: "perspective(1000px) rotateY(-3deg)",
            transformStyle: "preserve-3d",
            animation: "slideInLeft 1s ease-out 0.2s both",
            marginBottom: "60px",
          }}
        >
          <Aboutcard />
        </div>

        <div
          style={{
            transform: "perspective(1000px) rotateX(2deg)",
            transformStyle: "preserve-3d",
            animation: "slideInRight 1s ease-out 0.4s both",
            marginBottom: "40px",
          }}
        >
          <h1
            className="project-heading"
            style={{
              color: "white",
              padding: "20px",
              textAlign: "center",
              textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
              transform: "translateZ(20px)",
            }}
          >
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <div
            style={{
              transform: "translateZ(15px)",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Techstack />
          </div>
        </div>

        <div
          style={{
            transform: "perspective(1000px) rotateY(3deg)",
            transformStyle: "preserve-3d",
            animation: "slideInLeft 1s ease-out 0.6s both",
            marginBottom: "40px",
          }}
        >
          <h1
            className="project-heading"
            style={{
              color: "white",
              padding: "20px",
              textAlign: "center",
              textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
              transform: "translateZ(20px)",
            }}
          >
            <strong className="purple">Tools</strong> I use
          </h1>
          <div
            style={{
              transform: "translateZ(15px)",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Toolstack />
          </div>
        </div>

        <div
          style={{
            transform: "perspective(1000px) rotateX(-2deg)",
            transformStyle: "preserve-3d",
            animation: "slideInUp 1s ease-out 0.8s both",
          }}
        >
          <Github />
        </div>
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
            transform: perspective(1000px) rotateY(-3deg) translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(-30deg) translateX(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(2deg) translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(-45deg) translateY(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(-2deg) translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}

export default About;
