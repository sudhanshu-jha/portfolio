import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <div className="home-about-section" id="about">
      <div className="home-about-section-inner">
        <div className="about-content-grid">
          <div className="about-text-col">
            <p className="about-label">About me</p>
            <h2 className="about-headline">
              Building things<br />I believe in.
            </h2>
            <p className="about-body">
              I fell in love with programming and never looked back.
              Fluent in <b>Python, FastAPI,</b> and <b>Machine Learning</b> —
              I build products where backend rigor meets thoughtful interfaces.
            </p>
            <p className="about-body" style={{ marginTop: "20px" }}>
              My work spans <b>web technologies</b> and <b>ML systems</b>.
              I reach for <b>React.js, Next.js,</b> and modern JavaScript
              when bringing ideas to life on the frontend.
            </p>
          </div>
          <div className="about-connect-col">
            <p className="social-section-label">Connect</p>
            <div className="social-links-row">
              <a
                href="https://github.com/sudhanshu-jha"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <AiFillGithub size={16} />
                GitHub
              </a>
              <a
                href="https://x.com/Sudhanshujha91"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <AiOutlineTwitter size={16} />
                X / Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-jha/"
                target="_blank"
                rel="noreferrer"
                className="social-link-pill"
              >
                <FaLinkedinIn size={14} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .home-about-section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }
        .about-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-connect-col {
          padding-top: 72px;
        }
        @media (max-width: 768px) {
          .home-about-section-inner {
            padding: 0 24px;
          }
          .about-content-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-connect-col {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Home2;
