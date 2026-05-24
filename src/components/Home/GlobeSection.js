import React from "react";
import { motion } from "framer-motion";
import { Globe } from "../ui/interactive-globe";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const STATS = [
  { n: "10+", label: "Countries reached" },
  { n: "5+", label: "Remote teams" },
  { n: "3", label: "Continents" },
];

function GlobeSection() {
  return (
    <div className="globe-section">
      <div className="globe-inner">
        <div className="globe-card">
          {/* Ambient glow */}
          <div className="globe-ambient" />

          <div className="globe-layout">
            {/* Left */}
            <div className="globe-text">
              <motion.div className="globe-badge" {...fadeUp(0)}>
                <span className="globe-badge-dot" />
                Open to opportunities worldwide
              </motion.div>

              <motion.h2 className="globe-headline" {...fadeUp(0.1)}>
                Built for a<br />
                <span className="globe-accent">global stage</span>
              </motion.h2>

              <motion.p className="globe-body" {...fadeUp(0.2)}>
                Collaboration has no borders. I've shipped products with
                distributed teams across multiple time zones —
                from product ideation to production.
                Drag the globe to explore.
              </motion.p>

              <motion.div className="globe-stats" {...fadeUp(0.3)}>
                {STATS.map(({ n, label }, i) => (
                  <React.Fragment key={label}>
                    <div className="globe-stat">
                      <span className="globe-stat-n">{n}</span>
                      <span className="globe-stat-l">{label}</span>
                    </div>
                    {i < STATS.length - 1 && <div className="globe-stat-div" />}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            {/* Right — Globe canvas */}
            <motion.div
              className="globe-canvas-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Globe size={460} />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .globe-section {
          background: #060810;
          padding: 80px 0;
        }

        .globe-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .globe-card {
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(99,179,237,0.1);
          background: rgba(255,255,255,0.02);
          overflow: hidden;
          backdrop-filter: blur(4px);
        }

        .globe-ambient {
          position: absolute;
          top: -40px;
          right: 20%;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: rgba(99,179,237,0.05);
          filter: blur(60px);
          pointer-events: none;
        }

        .globe-layout {
          display: flex;
          flex-direction: row;
          align-items: center;
          min-height: 500px;
        }

        .globe-text {
          flex: 1;
          padding: 56px 48px;
          position: relative;
          z-index: 1;
        }

        .globe-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          border: 1px solid rgba(99,179,237,0.2);
          background: rgba(99,179,237,0.06);
          padding: 4px 12px;
          font-size: 0.72rem;
          color: rgba(200,215,240,0.6);
          letter-spacing: 0.02em;
          margin-bottom: 28px;
        }

        .globe-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #68d391;
          animation: globePulse 2s ease-in-out infinite;
        }

        @keyframes globePulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }

        .globe-headline {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #f0f4ff;
          line-height: 1.1;
          margin: 0 0 20px;
        }

        .globe-accent {
          background: linear-gradient(90deg, #63b3ed, #90cdf4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .globe-body {
          font-size: 0.95rem;
          color: rgba(200,215,240,0.55);
          line-height: 1.7;
          max-width: 400px;
          margin: 0 0 40px;
        }

        .globe-stats {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .globe-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .globe-stat-n {
          font-size: 1.75rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #f0f4ff;
          line-height: 1;
        }

        .globe-stat-l {
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(200,215,240,0.35);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .globe-stat-div {
          width: 1px;
          height: 32px;
          background: rgba(99,179,237,0.15);
        }

        .globe-canvas-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
        }

        @media (max-width: 768px) {
          .globe-layout {
            flex-direction: column;
          }
          .globe-text {
            padding: 40px 28px 24px;
          }
          .globe-canvas-wrap {
            padding: 0 16px 40px;
          }
          .globe-canvas-wrap canvas {
            width: 300px !important;
            height: 300px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default GlobeSection;
