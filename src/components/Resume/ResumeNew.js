import React from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Resume_Sudhanshu_2026.pdf";

const TIMELINE = [
  {
    chapter: "01",
    period: "Dec 2025 – Present",
    company: "Juniper Square",
    sub: "JSQ Technologies India Pvt. Ltd.",
    role: "Technical Lead",
    current: true,
    highlights: [
      "Modernizing legacy application with Domain-Driven Design and incremental refactoring — defining a scalable, modular architecture.",
      "Implemented centralized logging and monitoring for real-time production observability.",
      "Mentoring junior developers; driving effective delegation and successful project delivery.",
    ],
    tags: ["DDD", "Observability", "Mentorship", "Architecture"],
    metric: null,
  },
  {
    chapter: "02",
    period: "May – Aug 2025",
    company: "Codvo",
    sub: "Codvo Private Limited",
    role: "Sr Backend Lead II",
    highlights: [
      "Architected LLM-powered speech-to-text service with HIPAA-compliant FastAPI — high-throughput audio ingestion pipeline.",
      "Containerized microservices with Docker; defined API contracts and reusable service components.",
      "Improved deployment consistency through standardized coding guidelines and CI practices.",
    ],
    tags: ["LLM", "FastAPI", "HIPAA", "Docker", "Microservices"],
    metric: { value: "HIPAA", label: "Compliant" },
  },
  {
    chapter: "03",
    period: "Sept 2024 – May 2025",
    company: "Infinite Computer Solutions",
    sub: "India Limited",
    role: "Technical Lead",
    highlights: [
      "Serverless AWS architecture: S3-triggered Lambda for data ingestion, EventBridge-scheduled reporting Lambda.",
      "Dynamic Pandas reports from MongoDB — reduced manual reporting effort by 80%.",
      "Led 4-member Scrum team; automated stakeholder distribution via AWS SNS.",
    ],
    tags: ["AWS Lambda", "EventBridge", "Pandas", "MongoDB", "SNS"],
    metric: { value: "80%", label: "Less manual reporting" },
  },
  {
    chapter: "04",
    period: "Mar 2021 – Sept 2024",
    company: "Careers360",
    sub: "Pathfinder Publishing Pvt. Ltd.",
    role: "Tech Lead — Backend",
    highlights: [
      "Led 10 engineers; built APIs serving 100,000+ monthly users — driving a 15% engagement increase.",
      "Scaled data processing with Kafka; overhauled legacy systems for 50% performance improvement.",
      "Integrated AI-driven spam filters into Q&A platform and built CI/CD pipelines.",
    ],
    tags: ["Python", "FastAPI", "Django", "Kafka", "CI/CD", "ElasticSearch"],
    metric: { value: "100K+", label: "Monthly users" },
  },
  {
    chapter: "05",
    period: "Apr 2019 – Dec 2020",
    company: "Granalyze Technologies",
    sub: "Private Limited",
    role: "Software Engineer",
    highlights: [
      "Full-stack Python/Django + React engineer; managed AWS infrastructure for uptime and scale.",
      "Led 20-person team across multi-module projects; contributed to Agile sprint planning and retros.",
      "Delivered features increasing website traffic by 40% and user satisfaction.",
    ],
    tags: ["Python", "Django", "React", "AWS"],
    metric: { value: "+40%", label: "Website traffic" },
  },
  {
    chapter: "06",
    period: "May 2018 – Mar 2019",
    company: "Big Drop",
    sub: "Big Drop Private Limited",
    role: "Software Engineer",
    highlights: [
      "End-to-end web development: Python, Django, HTML, CSS, JavaScript.",
      "Boosted user experience scores by 55% over the company-wide previous best.",
      "Reduced rework by 23% and costs by 15% through best-practice implementation.",
    ],
    tags: ["Python", "Django", "JavaScript", "HTML", "CSS"],
    metric: { value: "+55%", label: "UX score" },
  },
  {
    chapter: "07",
    period: "Mar 2015 – Sept 2017",
    company: "Samsung",
    sub: "Samsung India Electronics Pvt. Ltd.",
    role: "Engineer",
    highlights: [
      "Analysis & testing for UHD Smart TVs — contributed to reducing field return units by 50%.",
      "Automated repetitive engineering tasks in Python; built HTML/CSS/JS dashboards for data-driven decisions.",
      "Prepared root-cause analyses for complex field defects; recognized by Samsung Management.",
    ],
    tags: ["Python", "Testing", "Analysis", "HTML/JS"],
    metric: { value: "50%", label: "Return unit reduction" },
  },
];

const SKILLS = [
  { category: "Languages & Frameworks", items: ["Python", "FastAPI", "Django", "Flask", "Nest.js", "JavaScript", "Pyramid", "GraphQL", "HTML", "CSS"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "ElasticSearch", "Redis"] },
  { category: "Cloud & Infra", items: ["AWS S3", "EC2", "Lambda", "RDS", "SQS", "SNS", "CloudFront", "EventBridge", "Docker", "Kafka"] },
  { category: "Tools & Process", items: ["Git", "Linux", "Jira", "Asana", "Agile / Scrum"] },
];

const ACHIEVEMENTS = [
  { year: "2021", title: "Shooting Star of the Month", org: "Careers360" },
  { year: "2018", title: "Client Appreciation Award", org: "Big Drop" },
  { year: "2016", title: "Silver Award — Best Team", org: "Samsung" },
  { year: "2016", title: "Best Team Business Award Q2", org: "Samsung" },
  { year: "2015", title: "Technical Analysis Recognition", org: "Samsung Management" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function TimelineItem({ item }) {
  return (
    <motion.div
      className="jrn-chapter"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ghost chapter number */}
      <span className="jrn-ghost">{item.chapter}</span>

      <div className="jrn-chapter-inner">
        {/* Left: period + dot */}
        <div className="jrn-left">
          <span className="jrn-period">{item.period}</span>
          {item.current && <span className="jrn-current-badge">Current</span>}
          <div className="jrn-dot" />
        </div>

        {/* Right: content */}
        <div className="jrn-card">
          <p className="jrn-sub">{item.sub}</p>
          <h2 className="jrn-company">{item.company}</h2>
          <p className="jrn-role">{item.role}</p>

          <ul className="jrn-bullets">
            {item.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="jrn-footer">
            <div className="jrn-tags">
              {item.tags.map((t) => (
                <span key={t} className="jrn-tag">{t}</span>
              ))}
            </div>
            {item.metric && (
              <div className="jrn-metric">
                <span className="jrn-metric-val">{item.metric.value}</span>
                <span className="jrn-metric-lbl">{item.metric.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ResumeNew() {
  return (
    <div className="jrn-page">
      {/* ── Hero ── */}
      <div className="jrn-hero">
        <motion.div {...fadeUp(0)}>
          <p className="jrn-eyebrow">Career Journey</p>
          <h1 className="jrn-hero-title">
            9+ Years.<br />
            7 Companies.<br />
            <span className="jrn-accent">1 Journey.</span>
          </h1>
          <p className="jrn-hero-sub">
            From hardware engineer at Samsung to Technical Lead building AI systems —
            a decade of shipping products, leading teams, and solving hard problems.
          </p>
          <a href={pdf} target="_blank" rel="noreferrer" className="jrn-dl-btn">
            <AiOutlineDownload size={15} />
            Download PDF
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div className="jrn-stats" {...fadeUp(0.15)}>
          {[
            { n: "9+",  l: "Years experience" },
            { n: "5",   l: "Leadership roles" },
            { n: "100K+", l: "Monthly users served" },
            { n: "30+", l: "Team members led" },
          ].map(({ n, l }) => (
            <div key={l} className="jrn-stat">
              <span className="jrn-stat-n">{n}</span>
              <span className="jrn-stat-l">{l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Timeline ── */}
      <div className="jrn-timeline">
        <div className="jrn-line" />
        {TIMELINE.map((item) => (
          <TimelineItem key={item.chapter} item={item} />
        ))}
      </div>

      {/* ── Skills ── */}
      <div className="jrn-section">
        <motion.div {...fadeUp(0)}>
          <p className="jrn-eyebrow">Technical Skills</p>
          <h2 className="jrn-section-title">Stack</h2>
        </motion.div>
        <div className="jrn-skills-grid">
          {SKILLS.map((group, i) => (
            <motion.div key={group.category} className="jrn-skill-group" {...fadeUp(i * 0.07)}>
              <p className="jrn-skill-cat">{group.category}</p>
              <div className="jrn-skill-tags">
                {group.items.map((s) => (
                  <span key={s} className="jrn-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Achievements + Education ── */}
      <div className="jrn-section jrn-section--alt">
        <div className="jrn-bottom-grid">
          {/* Achievements */}
          <motion.div {...fadeUp(0)}>
            <p className="jrn-eyebrow">Recognition</p>
            <h2 className="jrn-section-title">Achievements</h2>
            <div className="jrn-awards">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.title} className="jrn-award">
                  <span className="jrn-award-year">{a.year}</span>
                  <div>
                    <p className="jrn-award-title">{a.title}</p>
                    <p className="jrn-award-org">{a.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education + Certifications */}
          <motion.div {...fadeUp(0.1)}>
            <p className="jrn-eyebrow">Education</p>
            <h2 className="jrn-section-title">Background</h2>
            <div className="jrn-edu-card">
              <p className="jrn-edu-period">2010 – 2014</p>
              <p className="jrn-edu-degree">B.Tech — Electronics & Communication</p>
              <p className="jrn-edu-inst">Institute of Technical Education & Research, Bhubaneswar</p>
            </div>
            <p className="jrn-eyebrow" style={{ marginTop: 40 }}>Certifications</p>
            <div className="jrn-certs">
              <div className="jrn-cert">
                <span className="jrn-cert-year">2018</span>
                <span>Google — AdWords Mobile, Display & Mobile Sites</span>
              </div>
              <div className="jrn-cert">
                <span className="jrn-cert-year">2015</span>
                <span>NIIT — A-Grade Java Programmer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .jrn-page {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .jrn-hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 140px 48px 80px;
        }

        .jrn-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 16px;
          display: block;
        }

        .jrn-hero-title {
          font-size: clamp(3.5rem, 9vw, 7rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1.0;
          margin: 0 0 28px;
          color: var(--text);
        }

        .jrn-accent {
          color: var(--blue);
        }

        .jrn-hero-sub {
          font-size: clamp(1rem, 1.8vw, 1.2rem);
          color: var(--text-dim);
          line-height: 1.7;
          max-width: 560px;
          margin: 0 0 36px;
          font-weight: 300;
        }

        .jrn-dl-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border: 1px solid rgba(99,179,237,0.4);
          border-radius: 980px;
          color: var(--blue);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          background: rgba(99,179,237,0.08);
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
          margin-bottom: 64px;
        }

        .jrn-dl-btn:hover {
          background: rgba(99,179,237,0.18);
          border-color: rgba(99,179,237,0.65);
          box-shadow: 0 0 20px rgba(99,179,237,0.2);
          color: #90cdf4;
          text-decoration: none;
        }

        /* Stats */
        .jrn-stats {
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        .jrn-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .jrn-stat-n {
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          color: var(--text);
          line-height: 1;
        }

        .jrn-stat-l {
          font-size: 0.72rem;
          color: var(--text-mute);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* ── Timeline ── */
        .jrn-timeline {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .jrn-line {
          position: absolute;
          left: 200px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, var(--border) 8%, var(--border) 92%, transparent);
        }

        /* ── Chapter ── */
        .jrn-chapter {
          position: relative;
          margin-bottom: 0;
        }

        .jrn-ghost {
          position: absolute;
          top: -20px;
          left: 0;
          font-size: 8rem;
          font-weight: 900;
          letter-spacing: -0.06em;
          color: var(--text);
          opacity: 0.03;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .jrn-chapter-inner {
          display: grid;
          grid-template-columns: 152px 1fr;
          gap: 0 40px;
          padding: 48px 0;
          border-bottom: 1px solid rgba(99,179,237,0.06);
        }

        .jrn-chapter:last-child .jrn-chapter-inner {
          border-bottom: none;
        }

        /* Left column */
        .jrn-left {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding-right: 40px;
          padding-top: 6px;
          position: relative;
        }

        .jrn-period {
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-mute);
          letter-spacing: 0.03em;
          text-align: right;
          line-height: 1.4;
        }

        .jrn-current-badge {
          margin-top: 6px;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #68d391;
          padding: 2px 8px;
          border: 1px solid rgba(104,211,145,0.35);
          border-radius: 999px;
          background: rgba(104,211,145,0.08);
        }

        .jrn-dot {
          position: absolute;
          right: -6px;
          top: 10px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--bg);
          border: 2px solid var(--blue);
          box-shadow: 0 0 10px rgba(99,179,237,0.4);
        }

        /* Right column — card */
        .jrn-card {
          padding-top: 4px;
        }

        .jrn-sub {
          font-size: 0.7rem;
          color: var(--text-mute);
          letter-spacing: 0.05em;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .jrn-company {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text);
          margin: 0 0 6px;
          line-height: 1;
        }

        .jrn-role {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--blue);
          margin: 0 0 24px;
          letter-spacing: 0.01em;
        }

        .jrn-bullets {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .jrn-bullets li {
          font-size: 0.9rem;
          color: var(--text-dim);
          line-height: 1.65;
          padding-left: 16px;
          position: relative;
        }

        .jrn-bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 10px;
          width: 5px;
          height: 1px;
          background: var(--blue);
          opacity: 0.6;
        }

        .jrn-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .jrn-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .jrn-tag {
          font-size: 0.68rem;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 3px;
          background: rgba(99,179,237,0.08);
          color: rgba(200,215,240,0.6);
          border: 1px solid rgba(99,179,237,0.2);
          letter-spacing: 0.02em;
        }

        .jrn-metric {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          flex-shrink: 0;
        }

        .jrn-metric-val {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--blue);
          line-height: 1;
        }

        .jrn-metric-lbl {
          font-size: 0.65rem;
          color: var(--text-mute);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Generic section ── */
        .jrn-section {
          padding: 80px 48px;
          max-width: 1100px;
          margin: 0 auto;
          border-top: 1px solid var(--border);
        }

        .jrn-section--alt {
          max-width: 100%;
          background: var(--bg-2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .jrn-section--alt > * {
          max-width: 1100px;
          margin: 0 auto;
        }

        .jrn-section-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          color: var(--text);
          margin: 0 0 40px;
          line-height: 1;
        }

        /* ── Skills ── */
        .jrn-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
        }

        .jrn-skill-cat {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-mute);
          margin: 0 0 12px;
        }

        .jrn-skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        /* ── Bottom grid ── */
        .jrn-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 80px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Awards */
        .jrn-awards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .jrn-award {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid rgba(99,179,237,0.06);
        }

        .jrn-award:last-child { border-bottom: none; }

        .jrn-award-year {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--blue);
          letter-spacing: 0.04em;
          flex-shrink: 0;
          padding-top: 2px;
          min-width: 36px;
        }

        .jrn-award-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text);
          margin: 0 0 2px;
        }

        .jrn-award-org {
          font-size: 0.75rem;
          color: var(--text-mute);
          margin: 0;
          letter-spacing: 0.02em;
        }

        /* Education */
        .jrn-edu-card {
          padding: 24px;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: rgba(99,179,237,0.03);
        }

        .jrn-edu-period {
          font-size: 0.7rem;
          color: var(--blue);
          letter-spacing: 0.08em;
          margin: 0 0 8px;
          font-weight: 600;
        }

        .jrn-edu-degree {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 6px;
          letter-spacing: -0.01em;
        }

        .jrn-edu-inst {
          font-size: 0.82rem;
          color: var(--text-dim);
          margin: 0;
          line-height: 1.5;
        }

        .jrn-certs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 12px;
        }

        .jrn-cert {
          display: flex;
          gap: 16px;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .jrn-cert-year {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--blue);
          flex-shrink: 0;
          min-width: 36px;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .jrn-hero { padding: 120px 24px 60px; }
          .jrn-timeline { padding: 0 24px 60px; }
          .jrn-line { left: 100px; }
          .jrn-chapter-inner { grid-template-columns: 60px 1fr; gap: 0 24px; }
          .jrn-left { padding-right: 20px; }
          .jrn-period { font-size: 0.62rem; }
          .jrn-bottom-grid { grid-template-columns: 1fr; gap: 48px; padding: 48px 24px; }
          .jrn-section { padding: 60px 24px; }
          .jrn-stats { gap: 28px; }
        }

        @media (max-width: 480px) {
          .jrn-line { display: none; }
          .jrn-chapter-inner { grid-template-columns: 1fr; }
          .jrn-left { align-items: flex-start; padding-right: 0; flex-direction: row; gap: 12px; }
          .jrn-dot { display: none; }
          .jrn-ghost { font-size: 5rem; }
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
