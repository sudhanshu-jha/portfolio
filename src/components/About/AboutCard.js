import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, Network, Zap, Bot, FlaskConical } from "lucide-react";

const BIO =
  "Full Stack + ML Engineer based in New Delhi. I build production-grade agentic systems, fine-tune language models, and ship FastAPI backends that serve real traffic. Fluent in the full stack from React frontends to PyTorch training loops — with a deep focus on making AI systems that actually work in prod.";

const INTERESTS = [
  { icon: Brain,        label: "LLM fine-tuning & eval" },
  { icon: Network,      label: "Agentic pipelines & MCP" },
  { icon: Cpu,          label: "Production ML systems" },
  { icon: Zap,          label: "RAG & vector search" },
  { icon: Bot,          label: "AI-first product design" },
  { icon: FlaskConical, label: "Experiment → ship fast" },
];

function TypingText({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 18);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      {!done && (
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: "1em",
            background: "#63b3ed",
            marginLeft: 2,
            verticalAlign: "text-bottom",
            animation: "cursorBlink 0.8s step-end infinite",
          }}
        />
      )}
    </span>
  );
}

function AboutCard() {
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onViewportEnter={() => setVisible(true)}
    >
      <div style={styles.card}>
        {/* Terminal title bar */}
        <div style={styles.titleBar}>
          <div style={styles.dots}>
            <span style={{ ...styles.dot, background: "#ff5f57" }} />
            <span style={{ ...styles.dot, background: "#febc2e" }} />
            <span style={{ ...styles.dot, background: "#28c840" }} />
          </div>
          <span style={styles.titleText}>about.ai — model: claude-sonnet</span>
          <div style={styles.badge}>
            <span style={styles.badgeDot} />
            live
          </div>
        </div>

        <div style={styles.body}>
          {/* Prompt */}
          <div style={styles.promptRow}>
            <span style={styles.promptSymbol}>›</span>
            <span style={styles.promptText}>Who is Sudhanshu Shekhar Jha?</span>
          </div>

          {/* Response */}
          <div style={styles.responseBlock}>
            <div style={styles.modelTag}>
              <Bot size={11} style={{ marginRight: 4 }} />
              assistant
            </div>
            <p style={styles.bioText}>
              {visible && <TypingText text={BIO} delay={300} />}
            </p>
          </div>

          {/* Divider */}
          <div style={styles.divider} />

          {/* Interests section */}
          <div style={styles.promptRow}>
            <span style={styles.promptSymbol}>›</span>
            <span style={styles.promptText}>What does he work on?</span>
          </div>

          <div style={styles.interestsGrid}>
            {INTERESTS.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                style={styles.chip}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, borderColor: "rgba(99,179,237,0.5)" }}
              >
                <Icon size={13} style={{ color: "#63b3ed", flexShrink: 0 }} />
                <span style={styles.chipLabel}>{label}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div style={styles.divider} />

          {/* Quote */}
          <div style={styles.quoteRow}>
            <span style={styles.quoteAccent}>"</span>
            <span style={styles.quoteText}>
              Strive to build things that make a difference.
            </span>
            <span style={styles.quoteAccent}>"</span>
          </div>

          {/* Footer meta */}
          <div style={styles.meta}>
            <span style={styles.metaItem}>📍 New Delhi, India</span>
            <span style={styles.metaSep} />
            <span style={styles.metaItem}>⚡ Open to remote</span>
            <span style={styles.metaSep} />
            <span style={styles.metaItem}>{BIO.split(" ").length} tokens</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
}

const styles = {
  card: {
    background: "#0d1117",
    border: "1px solid rgba(99,179,237,0.15)",
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 0 0 1px rgba(99,179,237,0.05), 0 32px 64px rgba(0,0,0,0.5)",
    fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace",
  },
  titleBar: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 16px",
    background: "rgba(255,255,255,0.03)",
    borderBottom: "1px solid rgba(99,179,237,0.08)",
  },
  dots: { display: "flex", gap: 6 },
  dot: { width: 12, height: 12, borderRadius: "50%", opacity: 0.8 },
  titleText: {
    flex: 1,
    textAlign: "center",
    fontSize: "0.7rem",
    color: "rgba(200,215,240,0.35)",
    letterSpacing: "0.05em",
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    fontSize: "0.65rem",
    color: "#68d391",
    letterSpacing: "0.05em",
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#68d391",
    animation: "cursorBlink 2s ease-in-out infinite",
  },
  body: { padding: "24px 28px 20px" },
  promptRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  promptSymbol: {
    color: "#63b3ed",
    fontSize: "1.1rem",
    fontWeight: 700,
    lineHeight: 1,
  },
  promptText: {
    fontSize: "0.8rem",
    color: "rgba(200,215,240,0.5)",
    letterSpacing: "0.01em",
  },
  responseBlock: {
    paddingLeft: 20,
    marginBottom: 20,
  },
  modelTag: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "0.62rem",
    color: "rgba(99,179,237,0.6)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 10,
    padding: "2px 8px",
    border: "1px solid rgba(99,179,237,0.15)",
    borderRadius: 4,
    background: "rgba(99,179,237,0.05)",
  },
  bioText: {
    fontSize: "0.92rem",
    color: "rgba(200,215,240,0.8)",
    lineHeight: 1.8,
    margin: 0,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  },
  divider: {
    height: 1,
    background: "rgba(99,179,237,0.08)",
    margin: "20px 0",
  },
  interestsGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 20,
    marginBottom: 4,
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 12px",
    background: "rgba(99,179,237,0.06)",
    border: "1px solid rgba(99,179,237,0.18)",
    borderRadius: 6,
    cursor: "default",
    transition: "border-color 0.2s",
  },
  chipLabel: {
    fontSize: "0.76rem",
    color: "rgba(200,215,240,0.65)",
    letterSpacing: "0.01em",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  },
  quoteRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    padding: "0 4px",
    marginBottom: 20,
  },
  quoteAccent: {
    fontSize: "1.8rem",
    color: "rgba(99,179,237,0.3)",
    lineHeight: 1,
    fontFamily: "Georgia, serif",
    flexShrink: 0,
  },
  quoteText: {
    fontSize: "0.88rem",
    color: "rgba(200,215,240,0.45)",
    fontStyle: "italic",
    lineHeight: 1.7,
    paddingTop: 6,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  },
  meta: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    paddingTop: 4,
  },
  metaItem: {
    fontSize: "0.7rem",
    color: "rgba(200,215,240,0.28)",
    letterSpacing: "0.02em",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
  },
  metaSep: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    background: "rgba(200,215,240,0.15)",
  },
};

export default AboutCard;
