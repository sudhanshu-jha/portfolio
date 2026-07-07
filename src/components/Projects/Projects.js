import React, { useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";
import { motion } from "framer-motion";
import eventflow from "../../Assets/Projects/eventflow.png";
import wildfire from "../../Assets/Projects/wildfire.png";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const HERO = {
  imgPath: eventflow,
  title: "EventFlow",
  meta: "2024  ·  Backend  ·  Analytics  ·  Kubernetes",
  description:
    "Production-grade async analytics & notification platform. Pyramid + GraphQL API, Celery/Redis task queue, PostgreSQL, JWT auth, React 18 dashboard. Full OpenTelemetry distributed tracing, Nginx load balancing, Kubernetes-ready with HPA autoscaling.",
  ghLink: "https://github.com/sudhanshu-jha/eventflow",
  tags: ["Python", "GraphQL", "Celery", "Redis", "K8s"],
};

const ROWS = [
  {
    id: "ai",
    label: "AI & Machine Learning",
    projects: [
      {
        imgPath: wildfire,
        title: "Wildfire Detection Pipeline",
        description:
          "Event-driven microservices: FastAPI ingestion, ONNX vision model, Rothermel spread model, WebSocket alerting. React + Leaflet, NATS JetStream, Kafka-swappable, Docker Compose.",
        ghLink: "https://github.com/sudhanshu-jha/wildfire-pipeline",
        tags: ["FastAPI", "ONNX", "NATS", "React"],
      },
      {
        imgPath: leaf,
        title: "Plant AI",
        description:
          "PyTorch + ResNet34 classifier. 98% accuracy across 38 plant disease classes on Kaggle dataset, with production-ready inference API.",
        ghLink: "",
        tags: ["PyTorch", "ResNet34", "FastAPI"],
      },
      {
        imgPath: leaf,
        title: "Emotion Detection",
        description:
          "CNN on FER-2013 with Keras. OpenCV pipeline — real-time 7-class emotion classification at 30fps on CPU.",
        ghLink: "",
        tags: ["Keras", "CNN", "OpenCV"],
      },
    ],
  },
  {
    id: "backend",
    label: "Backend Systems",
    projects: [
      {
        imgPath: eventflow,
        title: "EventFlow",
        description:
          "Async analytics platform: Pyramid, GraphQL, Celery workers, Redis, PostgreSQL, JWT auth, OpenTelemetry tracing, Kubernetes HPA autoscaling.",
        ghLink: "https://github.com/sudhanshu-jha/eventflow",
        tags: ["Python", "GraphQL", "K8s", "Redis"],
      },
      {
        imgPath: wildfire,
        title: "Wildfire Pipeline",
        description:
          "4 FastAPI microservices over NATS JetStream. Kafka-swappable transport. Fully containerised with Docker Compose + Postgres event store.",
        ghLink: "https://github.com/sudhanshu-jha/wildfire-pipeline",
        tags: ["FastAPI", "NATS", "Kafka", "Docker"],
      },
    ],
  },
  {
    id: "web",
    label: "Web Applications",
    projects: [
      {
        imgPath: bitsOfCode,
        title: "Chatify",
        description:
          "Real-time chat workspace — React.js, Material-UI, Firebase. Messaging, image sharing, message reactions.",
        ghLink: "",
        tags: ["React", "Firebase"],
      },
      {
        imgPath: bitsOfCode,
        title: "Bits-0f-C0de",
        description:
          "Personal blog in Next.js + Tailwind CSS. Markdown with syntax highlighting, dark mode, SEO-optimised.",
        ghLink: "",
        tags: ["Next.js", "Tailwind"],
      },
      {
        imgPath: bitsOfCode,
        title: "Editor.io",
        description:
          "Browser code editor with live HTML/CSS/JS preview pane, Local Storage auto-save.",
        ghLink: "",
        tags: ["JavaScript"],
      },
    ],
  },
];

function NetflixCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`nx-card ${hovered ? "nx-card--hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={project.imgPath} alt={project.title} className="nx-card-img" />
      <div className="nx-card-overlay">
        <div className="nx-card-info">
          <p className="nx-card-title">{project.title}</p>
          <div className="nx-card-tags">
            {project.tags.map((t) => (
              <span key={t} className="nx-tag">{t}</span>
            ))}
          </div>
          <p className="nx-card-desc">{project.description}</p>
          {project.ghLink && (
            <a
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
              className="nx-card-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <BsGithub size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ row }) {
  const trackRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * 700, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <div className="nx-row">
      <h2 className="nx-row-label">{row.label}</h2>
      <div className="nx-row-wrap">
        {showLeft && (
          <button className="nx-arrow nx-arrow--left" onClick={() => scroll(-1)}>
            <FiChevronLeft size={24} />
          </button>
        )}
        <div
          ref={trackRef}
          className="nx-row-track"
          onScroll={onScroll}
        >
          {row.projects.map((p, i) => (
            <NetflixCard key={i} project={p} />
          ))}
        </div>
        {showRight && row.projects.length > 3 && (
          <button className="nx-arrow nx-arrow--right" onClick={() => scroll(1)}>
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="nx-page">
      {/* ── Hero ── */}
      <div className="nx-hero">
        <img src={HERO.imgPath} alt={HERO.title} className="nx-hero-img" />
        <div className="nx-hero-gradient" />
        <motion.div
          className="nx-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="nx-hero-eyebrow">Featured Project</p>
          <h1 className="nx-hero-title">{HERO.title}</h1>
          <p className="nx-hero-meta">{HERO.meta}</p>
          <p className="nx-hero-desc">{HERO.description}</p>
          <div className="nx-hero-tags">
            {HERO.tags.map((t) => (
              <span key={t} className="nx-tag">{t}</span>
            ))}
          </div>
          <div className="nx-hero-actions">
            {HERO.ghLink && (
              <a href={HERO.ghLink} target="_blank" rel="noreferrer" className="nx-hero-btn-primary">
                <FiPlay size={16} /> View on GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Rows ── */}
      <div className="nx-rows">
        {ROWS.map((row) => (
          <ProjectRow key={row.id} row={row} />
        ))}
      </div>

      <style>{`
        .nx-page {
          background: #080808;
          min-height: 100vh;
          padding-bottom: 80px;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .nx-hero {
          position: relative;
          width: 100%;
          height: 85vh;
          min-height: 520px;
          overflow: hidden;
        }

        .nx-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.45) saturate(0.7);
        }

        .nx-hero-gradient {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, #080808 28%, rgba(8,8,8,0.6) 60%, transparent 100%),
            linear-gradient(to top, #080808 0%, rgba(8,8,8,0.5) 30%, transparent 60%);
          pointer-events: none;
        }

        .nx-hero-content {
          position: absolute;
          bottom: 18%;
          left: 0;
          padding: 0 5% 0 6%;
          max-width: 660px;
        }

        .nx-hero-eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #63b3ed;
          margin-bottom: 14px;
        }

        .nx-hero-title {
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #fff;
          margin: 0 0 14px;
        }

        .nx-hero-meta {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em;
          margin-bottom: 16px;
        }

        .nx-hero-desc {
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          line-height: 1.65;
          color: rgba(255,255,255,0.65);
          margin: 0 0 20px;
        }

        .nx-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 28px;
        }

        .nx-hero-actions {
          display: flex;
          gap: 12px;
        }

        .nx-hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 28px;
          background: #fff;
          color: #080808;
          font-size: 0.9rem;
          font-weight: 600;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.15s, opacity 0.15s;
        }

        .nx-hero-btn-primary:hover {
          background: rgba(255,255,255,0.85);
          color: #080808;
          text-decoration: none;
        }

        /* ── Rows ── */
        .nx-rows {
          margin-top: -80px;
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nx-row {
          padding: 0;
        }

        .nx-row-label {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          letter-spacing: 0.01em;
          padding: 0 4% 10px;
          margin: 0;
        }

        .nx-row-wrap {
          position: relative;
        }

        .nx-row-track {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          overflow-y: visible;
          padding: 20px 4% 28px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .nx-row-track::-webkit-scrollbar {
          display: none;
        }

        /* ── Cards ── */
        .nx-card {
          flex-shrink: 0;
          width: 260px;
          aspect-ratio: 16 / 9;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transform-origin: center center;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
          z-index: 1;
        }

        .nx-card--hovered {
          transform: scale(1.12);
          z-index: 20;
          box-shadow: 0 20px 60px rgba(0,0,0,0.8);
          border-radius: 6px;
        }

        .nx-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: filter 0.3s;
        }

        .nx-card--hovered .nx-card-img {
          filter: brightness(0.35);
        }

        .nx-card-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
          padding: 10px;
          pointer-events: none;
          transition: background 0.3s;
        }

        .nx-card--hovered .nx-card-overlay {
          background: rgba(0,0,0,0);
          justify-content: center;
          pointer-events: all;
        }

        .nx-card-info {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s, transform 0.25s;
        }

        .nx-card--hovered .nx-card-info {
          opacity: 1;
          transform: translateY(0);
        }

        .nx-card-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .nx-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 8px;
        }

        .nx-tag {
          font-size: 0.6rem;
          font-weight: 500;
          padding: 2px 7px;
          border-radius: 2px;
          background: rgba(99,179,237,0.2);
          color: #90cdf4;
          letter-spacing: 0.03em;
          border: 1px solid rgba(99,179,237,0.3);
        }

        .nx-card-desc {
          font-size: 0.68rem;
          line-height: 1.5;
          color: rgba(255,255,255,0.75);
          margin: 0 0 10px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .nx-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.68rem;
          font-weight: 600;
          color: #fff;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 3px;
          padding: 5px 12px;
          text-decoration: none;
          transition: background 0.15s;
          backdrop-filter: blur(4px);
        }

        .nx-card-btn:hover {
          background: rgba(255,255,255,0.28);
          color: #fff;
          text-decoration: none;
        }

        /* ── Scroll arrows ── */
        .nx-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 30;
          background: rgba(20,20,20,0.85);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          backdrop-filter: blur(4px);
        }

        .nx-arrow:hover {
          background: rgba(99,179,237,0.25);
          border-color: rgba(99,179,237,0.5);
          transform: translateY(-50%) scale(1.1);
        }

        .nx-arrow--left  { left: 8px; }
        .nx-arrow--right { right: 8px; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .nx-hero { height: 60vh; }
          .nx-hero-content { bottom: 10%; padding: 0 24px; }
          .nx-card { width: 200px; }
          .nx-row-label { padding: 0 24px 8px; }
          .nx-row-track { padding: 16px 24px 20px; }
        }
      `}</style>
    </div>
  );
}

export default Projects;
