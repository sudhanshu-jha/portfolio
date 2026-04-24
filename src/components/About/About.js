import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>

        <motion.div style={{ textAlign: "center", marginBottom: 56 }} {...fadeUp(0)}>
          <p className="about-label" style={{ display: "inline-block", marginBottom: 16 }}>
            Introduction
          </p>
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#f0f4ff",
            margin: 0,
          }}>
            About <span className="purple">Me</span>
          </h1>
        </motion.div>

        <motion.div style={{ marginBottom: 72 }} {...fadeUp(0.1)}>
          <Aboutcard />
        </motion.div>

        <motion.div style={{ marginBottom: 24, textAlign: "center" }} {...fadeUp(0.15)}>
          <h2 style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            color: "#f0f4ff",
            marginBottom: 8,
          }}>
            Professional <span className="purple">Skillset</span>
          </h2>
        </motion.div>

        <motion.div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 20,
            padding: 32,
            border: "1px solid rgba(99,179,237,0.12)",
            marginBottom: 72,
          }}
          {...fadeUp(0.2)}
        >
          <Techstack />
        </motion.div>

        <motion.div style={{ marginBottom: 24, textAlign: "center" }} {...fadeUp(0.25)}>
          <h2 style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            color: "#f0f4ff",
            marginBottom: 8,
          }}>
            <span className="purple">Tools</span> I Use
          </h2>
        </motion.div>

        <motion.div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: 20,
            padding: 32,
            border: "1px solid rgba(99,179,237,0.12)",
            marginBottom: 72,
          }}
          {...fadeUp(0.3)}
        >
          <Toolstack />
        </motion.div>

        <motion.div {...fadeUp(0.35)}>
          <Github />
        </motion.div>

      </Container>
    </Container>
  );
}

export default About;
