import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div
              style={{
                transform: "perspective(1000px) rotateY(-5deg)",
                transformStyle: "preserve-3d",
                padding: "30px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
                animation: "slideInLeft 1s ease-out",
              }}
            >
              <h1
                style={{
                  fontSize: "2.6em",
                  transform: "translateZ(20px)",
                  textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
                  marginBottom: "30px",
                }}
              >
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p
                className="home-about-body"
                style={{
                  transform: "translateZ(10px)",
                  lineHeight: "1.8",
                  fontSize: "1.1em",
                }}
              >
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in
                <i>
                  <b className="purple"> Python, FastAPI and ML. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Machine Learning.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Python</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.1}
              transitionSpeed={1000}
              gyroscope={true}
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#c084f5"
              glarePosition="all"
              glareBorderRadius="50%"
            >
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))",
                  borderRadius: "50%",
                  padding: "30px",
                  boxShadow: "0 30px 60px rgba(192, 132, 245, 0.3)",
                  border: "2px solid rgba(192, 132, 245, 0.4)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              >
                <img
                  src={myImg}
                  className="img-fluid"
                  alt="avatar"
                  style={{
                    borderRadius: "50%",
                    filter: "drop-shadow(0 15px 30px rgba(192, 132, 245, 0.4))",
                  }}
                />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div
              style={{
                textAlign: "center",
                transform: "perspective(1000px) rotateX(-10deg)",
                transformStyle: "preserve-3d",
                padding: "40px",
                background: "rgba(255, 255, 255, 0.02)",
                borderRadius: "25px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(5px)",
                animation: "slideInUp 1s ease-out 0.5s both",
              }}
            >
              <h1
                style={{
                  transform: "translateZ(25px)",
                  textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
                  marginBottom: "20px",
                }}
              >
                FIND ME ON
              </h1>
              <p
                style={{
                  transform: "translateZ(15px)",
                  fontSize: "1.2em",
                  marginBottom: "30px",
                }}
              >
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/sudhanshu-jha"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons social-icon-3d"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://x.com/Sudhanshujha91"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons social-icon-3d"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/sudhanshu-jha/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons social-icon-3d"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .home-about-social-links {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 30px !important;
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
          transform: translateZ(20px) !important;
        }

        .social-icons {
          margin: 0 !important;
          padding: 0 !important;
        }

        .social-icon-3d {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 60px !important;
          height: 60px !important;
          padding: 0 !important;
          border-radius: 15px !important;
          background: linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2)) !important;
          border: 1px solid rgba(192, 132, 245, 0.4) !important;
          transform: translateZ(10px) !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2) !important;
          color: #c084f5 !important;
          font-size: 28px !important;
          text-decoration: none !important;
        }

        .social-icon-3d:hover {
          transform: translateZ(20px) translateY(-10px) rotateY(15deg) !important;
          box-shadow: 0 20px 40px rgba(192, 132, 245, 0.5) !important;
          background: linear-gradient(135deg, rgba(192, 132, 245, 0.3), rgba(124, 58, 237, 0.3)) !important;
          color: #ffffff !important;
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

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(-45deg) translateY(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(-10deg) translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 30px 60px rgba(192, 132, 245, 0.3);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 35px 70px rgba(192, 132, 245, 0.4);
          }
        }
      `}</style>
    </Container>
  );
}
export default Home2;
