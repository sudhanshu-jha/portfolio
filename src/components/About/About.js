import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import OrbitingSkills from "../ui/orbiting-skills";

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

        <motion.div style={{ marginBottom: 40, textAlign: "center" }} {...fadeUp(0.15)}>
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

        {/* Orbiting skills visual + description */}
        <motion.div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 0,
            background: "rgba(255,255,255,0.02)",
            borderRadius: 20,
            border: "1px solid rgba(99,179,237,0.1)",
            overflow: "hidden",
            marginBottom: 40,
          }}
          {...fadeUp(0.18)}
        >
          {/* Left — orbit animation */}
          <div style={{ flex: "1 1 340px", minHeight: 360, position: "relative" }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(99,179,237,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <OrbitingSkills />
          </div>

          {/* Right — core skills text */}
          <div style={{ flex: "1 1 300px", padding: "48px 40px" }}>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(99,179,237,0.8)", marginBottom: 16 }}>
              Core Technologies
            </p>
            <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "#f0f4ff", marginBottom: 20, lineHeight: 1.2 }}>
              Hover an icon<br />to explore
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(200,215,240,0.5)", lineHeight: 1.75, marginBottom: 28, maxWidth: 320 }}>
              Six core technologies that power my day-to-day work — from structuring semantic HTML to orchestrating Node.js backends and crafting reactive interfaces with React.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Python", "FastAPI", "ML", "MCP", "JavaScript", "React", "Node.js", "Tailwind"].map((skill) => (
                <span key={skill} style={{
                  fontSize: "0.75rem",
                  padding: "4px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(99,179,237,0.2)",
                  color: "rgba(200,215,240,0.6)",
                  background: "rgba(99,179,237,0.06)",
                  letterSpacing: "0.02em",
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Github />
        </motion.div>

      </Container>
    </Container>
  );
}

export default About;
