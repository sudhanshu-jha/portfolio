import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <ul className="footer-icons">
          <li>
            <a
              href="https://github.com/sudhanshu-jha"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Sudhanshujha91"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="X / Twitter"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sudhanshu-jha/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        <hr className="footer-divider" />
        <p className="footer-legal">
          Copyright © {year} Sudhanshu Jha. Designed and built by Sudhanshu Jha.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
