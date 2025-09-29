import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container
      fluid
      className="footer"
      style={{
        transform: "perspective(1000px) rotateX(-5deg)",
        transformStyle: "preserve-3d",
        background: "linear-gradient(135deg, rgba(20, 20, 20, 0.95), rgba(40, 40, 40, 0.95))",
        backdropFilter: "blur(15px)",
        border: "1px solid rgba(192, 132, 245, 0.2)",
        boxShadow: "0 -20px 40px rgba(0, 0, 0, 0.4)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #c084f5, transparent)",
          animation: "shimmer 3s ease-in-out infinite",
        }}
      />

      <Row style={{ padding: "20px 0", alignItems: "center" }}>
        <Col md="4" className="footer-copywright" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              transform: "perspective(1000px) translateZ(20px) rotateY(-10deg)",
              transformStyle: "preserve-3d",
              animation: "slideInLeft 1s ease-out",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(192, 132, 245, 0.3)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "320px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(30px) rotateY(-5deg) translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(192, 132, 245, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(20px) rotateY(-10deg)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <h3
              style={{
                transform: "translateZ(15px)",
                fontSize: "0.9em",
                color: "#c084f5",
                textShadow: "0 5px 10px rgba(192, 132, 245, 0.3)",
                margin: 0,
                background: "linear-gradient(45deg, #c084f5, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Designed and Developed by Sudhanshu Jha
            </h3>
          </div>
        </Col>

        <Col md="4" className="footer-copywright" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              transform: "perspective(1000px) translateZ(25px)",
              transformStyle: "preserve-3d",
              animation: "slideInUp 1s ease-out 0.2s both",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(192, 132, 245, 0.3)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease",
              textAlign: "center",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "320px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(35px) rotateX(5deg) translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(192, 132, 245, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(25px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <h3
              style={{
                transform: "translateZ(15px)",
                fontSize: "1.1em",
                color: "#c084f5",
                textShadow: "0 5px 10px rgba(192, 132, 245, 0.3)",
                margin: 0,
                background: "linear-gradient(45deg, #7c3aed, #c084f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Copyright © {year} SJ
            </h3>
          </div>
        </Col>

        <Col md="4" className="footer-body" style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              transform: "perspective(1000px) translateZ(20px) rotateY(10deg)",
              transformStyle: "preserve-3d",
              animation: "slideInRight 1s ease-out 0.4s both",
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(192, 132, 245, 0.3)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease",
              minHeight: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              maxWidth: "320px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(30px) rotateY(5deg) translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(192, 132, 245, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "perspective(1000px) translateZ(20px) rotateY(10deg)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <ul
              className="footer-icons"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                listStyle: "none",
                padding: 0,
                margin: 0,
                transform: "translateZ(20px)",
              }}
            >
              <li className="social-icons">
                <a
                  href="https://github.com/sudhanshu-jha"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))",
                    border: "1px solid rgba(192, 132, 245, 0.4)",
                    color: "#c084f5",
                    fontSize: "24px",
                    transition: "all 0.3s ease",
                    transform: "translateZ(10px)",
                    textDecoration: "none",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateZ(20px) rotateY(15deg) rotateX(-10deg)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.4), rgba(124, 58, 237, 0.4))";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(192, 132, 245, 0.4)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateZ(10px)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.color = "#c084f5";
                  }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Sudhanshujha91"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))",
                    border: "1px solid rgba(192, 132, 245, 0.4)",
                    color: "#c084f5",
                    fontSize: "24px",
                    transition: "all 0.3s ease",
                    transform: "translateZ(10px)",
                    textDecoration: "none",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateZ(20px) rotateY(-15deg) rotateX(10deg)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.4), rgba(124, 58, 237, 0.4))";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(192, 132, 245, 0.4)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateZ(10px)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.color = "#c084f5";
                  }}
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sudhanshu-jha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))",
                    border: "1px solid rgba(192, 132, 245, 0.4)",
                    color: "#c084f5",
                    fontSize: "24px",
                    transition: "all 0.3s ease",
                    transform: "translateZ(10px)",
                    textDecoration: "none",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateZ(20px) rotateY(15deg) rotateX(-10deg)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.4), rgba(124, 58, 237, 0.4))";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(192, 132, 245, 0.4)";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateZ(10px)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.2)";
                    e.currentTarget.style.color = "#c084f5";
                  }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: perspective(1000px) translateZ(20px) rotateY(-45deg) translateX(-100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) translateZ(20px) rotateY(-10deg) translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: perspective(1000px) translateZ(25px) rotateX(45deg) translateY(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) translateZ(25px) rotateX(0deg) translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: perspective(1000px) translateZ(20px) rotateY(45deg) translateX(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) translateZ(20px) rotateY(10deg) translateX(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.2);
          }
        }
      `}</style>
    </Container>
  );
}

export default Footer;
