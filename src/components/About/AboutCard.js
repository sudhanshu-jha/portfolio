import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sudhanshu Shekhar Jha </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            Living and working in New Delhi, I have had the opportunity to learn so much in my field.
            I have been trained by a number of industry professionals, which means I’ve had many different experiences
            that have built me into the skilled professional I am today.
            Now, I’m looking for new challenges and hope to venture even further down my chosen career path,
            learning as I go.

            <br />
            Find out more about me by getting in touch.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sudhanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
