import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div
                style={{
                  transform: "perspective(1000px) rotateX(5deg)",
                  transformStyle: "preserve-3d",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <h1
                  style={{
                    paddingBottom: 15,
                    textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
                    transform: "translateZ(20px)",
                  }}
                  className="heading"
                >
                  Hi There!{" "}
                  <span
                    className="wave"
                    role="img"
                    aria-labelledby="wave"
                    style={{
                      display: "inline-block",
                      animation: "wave 2s ease-in-out infinite, float 4s ease-in-out infinite",
                      transform: "translateZ(30px)",
                    }}
                  >
                    👋🏻
                  </span>
                </h1>

                <h1
                  className="heading-name"
                  style={{
                    transform: "translateZ(25px)",
                    textShadow: "0 15px 30px rgba(192, 132, 245, 0.4)",
                    background: "linear-gradient(45deg, #c084f5, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  I'M
                  <strong className="main-name"> SUDHANSHU SHEKHAR JHA</strong>
                </h1>

                <div
                  style={{
                    padding: 50,
                    textAlign: "left",
                    transform: "translateZ(15px)",
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "15px",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Type />
                </div>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#c084f5"
                glarePosition="all"
                glareBorderRadius="20px"
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.1), rgba(124, 58, 237, 0.1))",
                    borderRadius: "20px",
                    padding: "20px",
                    boxShadow: "0 25px 50px rgba(192, 132, 245, 0.2)",
                    border: "1px solid rgba(192, 132, 245, 0.3)",
                    animation: "float 8s ease-in-out infinite",
                    animationDelay: "2s",
                  }}
                >
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{
                      maxHeight: "450px",
                      filter: "drop-shadow(0 10px 20px rgba(192, 132, 245, 0.3))",
                    }}
                  />
                </div>
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateX(5deg);
          }
          50% {
            transform: translateY(-20px) rotateX(5deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg) translateZ(30px);
          }
          25% {
            transform: rotate(20deg) translateZ(30px);
          }
          75% {
            transform: rotate(-10deg) translateZ(30px);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
