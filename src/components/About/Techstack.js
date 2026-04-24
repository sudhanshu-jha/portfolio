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
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
    padding: "20px",
    borderRadius: "14px",
    background: "rgba(99,179,237,0.05)",
    border: "1px solid rgba(99,179,237,0.15)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(10deg) rotateX(-6deg) translateY(-4px)";
    e.currentTarget.style.boxShadow = "0 16px 40px rgba(99,179,237,0.2)";
    e.currentTarget.style.borderColor = "rgba(99,179,237,0.4)";
    e.currentTarget.style.background = "rgba(99,179,237,0.1)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.3)";
    e.currentTarget.style.borderColor = "rgba(99,179,237,0.15)";
    e.currentTarget.style.background = "rgba(99,179,237,0.05)";
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
