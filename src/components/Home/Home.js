import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <div className="home-section" id="home">
        <div className="home-content">
          <p className="hero-eyebrow">Portfolio</p>
          <h1 className="hero-name">Sudhanshu Jha.</h1>
          <p className="hero-tagline">
            Full Stack Developer. ML Engineer.
          </p>
          <div className="hero-type-wrapper">
            <Type />
          </div>
          <div className="hero-cta">
            <Link to="/project" className="btn-apple-primary">
              View Projects
            </Link>
            <Link to="/about" className="btn-apple-secondary">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
