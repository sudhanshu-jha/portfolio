import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const iconStyle = {
    transition: "all 0.3s ease",
    transform: "perspective(1000px) translateZ(10px)",
    transformStyle: "preserve-3d",
    padding: "20px",
    borderRadius: "15px",
    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.1), rgba(124, 58, 237, 0.1))",
    border: "1px solid rgba(192, 132, 245, 0.3)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    backdropFilter: "blur(5px)",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) translateZ(30px) rotateY(15deg) rotateX(-10deg)";
    e.currentTarget.style.boxShadow = "0 20px 40px rgba(192, 132, 245, 0.4)";
    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.2), rgba(124, 58, 237, 0.2))";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) translateZ(10px)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.1), rgba(124, 58, 237, 0.1))";
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiPython />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiDjango />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiJavascript1 />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CgCPlusPlus />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiNodejs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiReact />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiMongodb />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiNextdotjs />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DiGit />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiFirebase />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiRedis />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiPostgresql />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
