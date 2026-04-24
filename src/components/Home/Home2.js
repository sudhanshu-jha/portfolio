import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function Home2() {
  return (
    <div className="home-about-section" id="about">
      <div className="section-inner">
        <div className="h2-grid">

          <div className="h2-text-col">
            <motion.p className="about-label" {...fadeUp(0)}>
              About me
            </motion.p>
            <motion.h2 className="about-headline" {...fadeUp(0.1)}>
              Building things<br />I believe in.
            </motion.h2>
            <motion.p className="about-body" {...fadeUp(0.2)}>
              I fell in love with programming and never looked back.
              Fluent in <b>Python, FastAPI,</b> and <b>Machine Learning</b> —
              I build products where backend rigor meets thoughtful interfaces.
            </motion.p>
            <motion.p className="about-body" style={{ marginTop: 20 }} {...fadeUp(0.3)}>
              My work spans <b>web technologies</b> and <b>ML systems</b>.
              I reach for <b>React.js, Next.js,</b> and modern JavaScript
              when bringing ideas to life on the frontend.
            </motion.p>
          </div>

          <div className="h2-connect-col">
            <motion.p className="social-section-label" {...fadeUp(0.15)}>
              Connect
            </motion.p>
            <motion.div className="social-links-row" {...fadeUp(0.25)}>
              <a
                href="https://github.com/sudhanshu-jha"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <AiFillGithub size={16} /> GitHub
              </a>
              <a
                href="https://x.com/Sudhanshujha91"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <AiOutlineTwitter size={16} /> X / Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-jha/"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <FaLinkedinIn size={14} /> LinkedIn
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div className="h2-stats" {...fadeUp(0.35)}>
              {[
                { n: "10+",  label: "Years building" },
                { n: "10+", label: "Projects shipped" },
              ].map(({ n, label }) => (
                <div key={label} className="h2-stat">
                  <span className="h2-stat-n">{n}</span>
                  <span className="h2-stat-l">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        .h2-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .h2-connect-col { padding-top: 64px; }
        .h2-stats {
          display: flex;
          gap: 32px;
          margin-top: 48px;
          flex-wrap: wrap;
        }
        .h2-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .h2-stat-n {
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: #63b3ed;
          line-height: 1;
        }
        .h2-stat-l {
          font-size: 0.75rem;
          font-weight: 400;
          color: rgba(200,215,240,0.4);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .h2-grid { grid-template-columns: 1fr; gap: 48px; }
          .h2-connect-col { padding-top: 0; }
        }
      `}</style>
    </div>
  );
}

export default Home2;
