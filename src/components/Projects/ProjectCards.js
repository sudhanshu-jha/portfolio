import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <div
      style={{
        perspective: "1000px",
        height: "100%",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(4deg) rotateX(-3deg) translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 64px rgba(99,179,237,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Card className="project-card-view" style={{ height: "100%" }}>
        <div style={{ overflow: "hidden", borderRadius: "16px 16px 0 0" }}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt={props.title}
            style={{
              transition: "transform 0.4s ease, filter 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.filter = "brightness(1) saturate(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(0.8) saturate(0.7)";
            }}
          />
        </div>
        <Card.Body style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          <Card.Title
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#63b3ed",
              margin: 0,
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.65,
              color: "rgba(200,215,240,0.6)",
              flex: 1,
            }}
          >
            {props.description}
          </Card.Text>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {!props.isBlog && props.demoLink && (
              <Button variant="primary" href={props.demoLink} target="_blank">
                <CgWebsite /> &nbsp;Demo
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCards;
