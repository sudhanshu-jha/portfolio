import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div
      style={{
        transform: "perspective(1000px) translateZ(0)",
        transformStyle: "preserve-3d",
        transition: "all 0.4s ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) translateZ(30px) rotateY(10deg) rotateX(-5deg)";
        e.currentTarget.style.boxShadow = "0 30px 60px rgba(192, 132, 245, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) translateZ(0)";
        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
      }}
    >
      <Card
        className="project-card-view"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(192, 132, 245, 0.3)",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(15px)",
          transform: "translateZ(10px)",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            transform: "translateZ(15px)",
            overflow: "hidden",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            style={{
              transform: "translateZ(5px)",
              transition: "transform 0.3s ease",
              filter: "brightness(0.9)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateZ(10px) scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateZ(5px) scale(1)";
              e.currentTarget.style.filter = "brightness(0.9)";
            }}
          />
        </div>
        <Card.Body style={{ transform: "translateZ(20px)", padding: "20px" }}>
          <Card.Title
            style={{
              transform: "translateZ(25px)",
              fontSize: "1.4em",
              color: "#c084f5",
              textShadow: "0 5px 10px rgba(192, 132, 245, 0.3)",
              marginBottom: "15px",
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              textAlign: "justify",
              transform: "translateZ(15px)",
              lineHeight: "1.6",
              fontSize: "0.95em",
              color: "#ddd",
            }}
          >
            {props.description}
          </Card.Text>
          <div
            style={{
              transform: "translateZ(30px)",
              marginTop: "20px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              style={{
                background: "linear-gradient(135deg, rgba(192, 132, 245, 0.8), rgba(124, 58, 237, 0.8))",
                border: "1px solid rgba(192, 132, 245, 0.5)",
                borderRadius: "10px",
                padding: "8px 16px",
                transition: "all 0.3s ease",
                transform: "translateZ(5px)",
                boxShadow: "0 5px 15px rgba(192, 132, 245, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(10px) translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(192, 132, 245, 0.5)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 1), rgba(124, 58, 237, 1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(5px) translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(192, 132, 245, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.8), rgba(124, 58, 237, 0.8))";
              }}
            >
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>

            {!props.isBlog && props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
                style={{
                  background: "linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(192, 132, 245, 0.8))",
                  border: "1px solid rgba(192, 132, 245, 0.5)",
                  borderRadius: "10px",
                  padding: "8px 16px",
                  transition: "all 0.3s ease",
                  transform: "translateZ(5px)",
                  boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(10px) translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(124, 58, 237, 0.5)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 1), rgba(192, 132, 245, 1))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(5px) translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(124, 58, 237, 0.3)";
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(192, 132, 245, 0.8))";
                }}
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProjectCards;
