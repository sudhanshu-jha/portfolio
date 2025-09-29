import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <div
        style={{
          transform: "perspective(1000px) rotateX(-5deg)",
          transformStyle: "preserve-3d",
          animation: "float 6s ease-in-out infinite",
          textAlign: "center",
          width: "100%",
        }}
      >
        <h1
          className="project-heading"
          style={{
            paddingBottom: "20px",
            textShadow: "0 10px 20px rgba(192, 132, 245, 0.3)",
            transform: "translateZ(20px)",
          }}
        >
          Days I <strong className="purple">Code</strong>
        </h1>
        <div
          style={{
            textAlign: "center",
            padding: "40px",
            color: "white",
            border: "1px solid rgba(192, 132, 245, 0.3)",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.05)",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(15px)",
            transform: "translateZ(15px)",
            transition: "transform 0.3s ease",
            maxWidth: "600px",
            margin: "0 auto",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateZ(25px) rotateY(5deg)";
            e.currentTarget.style.boxShadow = "0 30px 60px rgba(192, 132, 245, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateZ(15px)";
            e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.3)";
          }}
        >
          <p
            style={{
              fontSize: "1.3em",
              marginBottom: "20px",
              transform: "translateZ(10px)",
              textShadow: "0 5px 10px rgba(192, 132, 245, 0.2)",
            }}
          >
            GitHub Activity Calendar
          </p>
          <p
            style={{
              fontSize: "1.1em",
              color: "#bbb",
              transform: "translateZ(8px)",
              lineHeight: "1.6",
            }}
          >
            Visit my{" "}
            <a
              href="https://github.com/sudhanshu-jha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#c084f5",
                textDecoration: "none",
                padding: "5px 10px",
                borderRadius: "8px",
                background: "rgba(192, 132, 245, 0.2)",
                border: "1px solid rgba(192, 132, 245, 0.3)",
                transition: "all 0.3s ease",
                textShadow: "0 2px 4px rgba(192, 132, 245, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(192, 132, 245, 0.3)";
                e.currentTarget.style.transform = "translateZ(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(192, 132, 245, 0.2)";
                e.currentTarget.style.transform = "translateZ(0px)";
              }}
            >
              GitHub profile
            </a>{" "}
            to see my coding activity
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: perspective(1000px) rotateX(-5deg) translateY(0px);
          }
          50% {
            transform: perspective(1000px) rotateX(-5deg) translateY(-10px);
          }
        }
      `}</style>
    </Row>
  );
}

export default Github;
