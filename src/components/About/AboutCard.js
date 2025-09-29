import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div
      style={{
        transform: "perspective(1000px) rotateY(-5deg)",
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(-2deg) rotateX(2deg) translateZ(10px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(-5deg)";
      }}
    >
      <Card
        className="quote-card-view"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "20px",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(15px)",
          transform: "translateZ(20px)",
        }}
      >
        <Card.Body style={{ transform: "translateZ(10px)" }}>
          <blockquote className="blockquote mb-0">
            <p
              style={{
                textAlign: "justify",
                transform: "translateZ(5px)",
                lineHeight: "1.8",
                fontSize: "1.1em",
              }}
            >
              Hi Everyone, I am <span className="purple">Sudhanshu Shekhar Jha </span>
              from <span className="purple"> New Delhi, India.</span>
              <br />
              Living and working in New Delhi, I have had the opportunity to learn so much in my field.
              I have been trained by a number of industry professionals, which means I've had many different experiences
              that have built me into the skilled professional I am today.
              Now, I'm looking for new challenges and hope to venture even further down my chosen career path,
              learning as I go.

              <br />
              Find out more about me by getting in touch.

              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul style={{ transform: "translateZ(8px)" }}>
              <li
                className="about-activity"
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "rgba(192, 132, 245, 0.1)",
                  border: "1px solid rgba(192, 132, 245, 0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(5px) translateX(10px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0px) translateX(0px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.1)";
                }}
              >
                <ImPointRight /> Playing Football
              </li>
              <li
                className="about-activity"
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "rgba(192, 132, 245, 0.1)",
                  border: "1px solid rgba(192, 132, 245, 0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(5px) translateX(10px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0px) translateX(0px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.1)";
                }}
              >
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li
                className="about-activity"
                style={{
                  marginBottom: "10px",
                  padding: "8px",
                  borderRadius: "8px",
                  background: "rgba(192, 132, 245, 0.1)",
                  border: "1px solid rgba(192, 132, 245, 0.2)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateZ(5px) translateX(10px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateZ(0px) translateX(0px)";
                  e.currentTarget.style.background = "rgba(192, 132, 245, 0.1)";
                }}
              >
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p
              style={{
                color: "rgb(155 126 172)",
                transform: "translateZ(10px)",
                fontStyle: "italic",
                fontSize: "1.2em",
                textShadow: "0 5px 10px rgba(192, 132, 245, 0.3)",
              }}
            >
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer
              className="blockquote-footer"
              style={{
                transform: "translateZ(8px)",
                fontSize: "1.1em",
                color: "#c084f5",
              }}
            >
              Sudhanshu
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutCard;
