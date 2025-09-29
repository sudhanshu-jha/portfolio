import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos, SiPycharm, SiWindows, SiLinux, SiUbuntu,
} from "react-icons/si";

function Toolstack() {
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
    e.currentTarget.style.transform = "perspective(1000px) translateZ(30px) rotateY(-15deg) rotateX(10deg)";
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
          <SiMacos />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiUbuntu />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiPycharm />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiPostman />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiSlack />
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SiVercel />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
