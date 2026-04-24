import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos, SiPycharm, SiUbuntu,
} from "react-icons/si";

function Toolstack() {
  const iconStyle = {
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
    padding: "20px",
    borderRadius: "14px",
    background: "rgba(99,179,237,0.05)",
    border: "1px solid rgba(99,179,237,0.15)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "perspective(800px) rotateY(-10deg) rotateX(6deg) translateY(-4px)";
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
