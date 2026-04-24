import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Type from "./Type";
import Home2 from "./Home2";

const CUBES = [
  { size: 60, x: "10%",  y: "20%", delay: 0,    dur: 12, rx: 1,   ry: 0.6 },
  { size: 40, x: "80%",  y: "15%", delay: 2,    dur: 9,  rx: 0.5, ry: 1   },
  { size: 80, x: "75%",  y: "55%", delay: 1,    dur: 15, rx: 0.8, ry: 0.4 },
  { size: 30, x: "20%",  y: "60%", delay: 3,    dur: 10, rx: 1.2, ry: 0.9 },
  { size: 50, x: "50%",  y: "10%", delay: 1.5,  dur: 13, rx: 0.4, ry: 1.1 },
  { size: 25, x: "88%",  y: "75%", delay: 0.5,  dur: 8,  rx: 1,   ry: 0.7 },
];

function Cube({ size, x, y, delay, dur, rx, ry }) {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)` },
    { transform: `rotateY(180deg) translateZ(${half}px)` },
    { transform: `rotateY(90deg) translateZ(${half}px)` },
    { transform: `rotateY(-90deg) translateZ(${half}px)` },
    { transform: `rotateX(90deg) translateZ(${half}px)` },
    { transform: `rotateX(-90deg) translateZ(${half}px)` },
  ];

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        animation: `rotateCube${rx > 0.9 ? "A" : "B"} ${dur}s linear ${delay}s infinite`,
        opacity: 0.18,
      }}
    >
      {faces.map((f, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            transform: f.transform,
            border: "1px solid rgba(99,179,237,0.6)",
            background: "rgba(99,179,237,0.03)",
            backfaceVisibility: "visible",
          }}
        />
      ))}
    </div>
  );
}

function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handle = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section>
      <div className="hero3d">
        {/* Vignette */}
        <div className="hero3d-vignette" />

        {/* Scanlines */}
        <div className="hero3d-scanlines" />

        {/* Floating cubes */}
        <div className="hero3d-cubes">
          {CUBES.map((c, i) => (
            <Cube key={i} {...c} />
          ))}
        </div>

        {/* Perspective grid floor */}
        <div className="hero3d-grid" />

        {/* Horizon glow */}
        <div className="hero3d-glow" />

        {/* Main content with mouse parallax */}
        <motion.div
          className="hero3d-content"
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
        >
          <motion.p
            className="hero3d-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Portfolio
          </motion.p>

          <motion.h1
            className="hero3d-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Sudhanshu Jha.
          </motion.h1>

          <motion.p
            className="hero3d-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Full Stack Developer. ML Engineer.
          </motion.p>

          <motion.div
            className="hero3d-type"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <Type />
          </motion.div>

          <motion.div
            className="hero3d-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/project" className="hero3d-btn-primary">
              View Projects
            </Link>
            <Link to="/about" className="hero3d-btn-secondary">
              Learn more ›
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero3d-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="hero3d-scroll-line" />
          <span>scroll</span>
        </motion.div>
      </div>

      <Home2 />

      <style>{`
        .hero3d {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #060810;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 44px;
        }

        /* ── Vignette ── */
        .hero3d-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(6,8,16,0.85) 100%);
          pointer-events: none;
          z-index: 2;
        }

        /* ── Scanlines ── */
        .hero3d-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.07) 2px,
            rgba(0,0,0,0.07) 4px
          );
          pointer-events: none;
          z-index: 3;
        }

        /* ── Cubes ── */
        .hero3d-cubes {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        @keyframes rotateCubeA {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to   { transform: rotateX(360deg) rotateY(180deg); }
        }
        @keyframes rotateCubeB {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to   { transform: rotateX(180deg) rotateY(360deg); }
        }

        /* ── Grid floor ── */
        .hero3d-grid {
          position: absolute;
          bottom: 0;
          left: -20%;
          right: -20%;
          height: 55%;
          background-image:
            linear-gradient(rgba(99,179,237,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,179,237,0.12) 1px, transparent 1px);
          background-size: 72px 72px;
          transform: perspective(600px) rotateX(65deg);
          transform-origin: bottom center;
          mask-image: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 80%);
          -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 80%);
          z-index: 1;
        }

        /* ── Horizon glow ── */
        .hero3d-glow {
          position: absolute;
          bottom: 42%;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: rgba(99,179,237,0.5);
          box-shadow: 0 0 60px 20px rgba(99,179,237,0.25), 0 0 120px 40px rgba(99,179,237,0.12);
          z-index: 2;
        }

        /* ── Content ── */
        .hero3d-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          will-change: transform;
        }

        .hero3d-eyebrow {
          font-size: clamp(0.7rem, 1.5vw, 0.85rem);
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(99,179,237,0.85);
          margin-bottom: 20px;
        }

        .hero3d-name {
          font-size: clamp(3.2rem, 9vw, 7.5rem);
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.04em;
          color: #f0f4ff;
          margin: 0 0 20px;
          text-shadow:
            0 1px 0 rgba(99,179,237,0.3),
            0 2px 0 rgba(99,179,237,0.25),
            0 4px 0 rgba(99,179,237,0.2),
            0 8px 0 rgba(99,179,237,0.12),
            0 16px 30px rgba(0,0,0,0.6);
        }

        .hero3d-tagline {
          font-size: clamp(1rem, 2.5vw, 1.6rem);
          font-weight: 300;
          color: rgba(200,215,240,0.55);
          letter-spacing: -0.01em;
          margin: 0 0 36px;
        }

        .hero3d-type {
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: rgba(200,215,240,0.7);
          font-weight: 400;
          letter-spacing: -0.01em;
          margin-bottom: 52px;
          min-height: 1.5em;
        }

        .hero3d-type .Typewriter__wrapper {
          color: rgba(200,215,240,0.85) !important;
          font-weight: 400 !important;
        }

        .hero3d-type .Typewriter__cursor {
          color: rgba(99,179,237,0.8) !important;
        }

        /* ── CTA buttons ── */
        .hero3d-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero3d-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 13px 32px;
          background: rgba(99,179,237,0.15);
          color: #63b3ed;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          border-radius: 980px;
          text-decoration: none;
          border: 1px solid rgba(99,179,237,0.4);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(8px);
          box-shadow: 0 0 20px rgba(99,179,237,0.1);
        }

        .hero3d-btn-primary:hover {
          background: rgba(99,179,237,0.25);
          border-color: rgba(99,179,237,0.7);
          box-shadow: 0 0 30px rgba(99,179,237,0.25);
          color: #90cdf4;
          text-decoration: none;
        }

        .hero3d-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 13px 28px;
          background: transparent;
          color: rgba(200,215,240,0.55);
          font-size: 0.9375rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          border-radius: 980px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
        }

        .hero3d-btn-secondary:hover {
          color: rgba(200,215,240,0.85);
          text-decoration: none;
        }

        /* ── Scroll indicator ── */
        .hero3d-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          color: rgba(200,215,240,0.3);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hero3d-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(99,179,237,0.5), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }

        @media (max-width: 767px) {
          .hero3d-cubes { opacity: 0.6; }
          .hero3d-grid  { height: 40%; }
        }
      `}</style>
    </section>
  );
}

export default Home;
