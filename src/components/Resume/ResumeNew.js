import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import pdf from "../../Assets/Resume_Sudhanshu_.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const getScale = (w) => {
  if (w < 480) return 0.46;
  if (w < 768) return 0.62;
  if (w < 1100) return 0.88;
  return 1.1;
};

function ResumeNew() {
  const [width, setWidth]     = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="rv-page">
      {/* Header */}
      <motion.div
        className="rv-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="rv-header-text">
          <p className="rv-eyebrow">Career</p>
          <h1 className="rv-title">Résumé</h1>
        </div>
        <a href={pdf} target="_blank" rel="noreferrer" className="rv-download-btn">
          <AiOutlineDownload size={16} />
          Download PDF
        </a>
      </motion.div>

      {/* Viewer */}
      <motion.div
        className="rv-viewer-wrap"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        {loading && !error && (
          <div className="rv-state">
            <div className="rv-spinner" />
            <p className="rv-state-text">Loading résumé…</p>
          </div>
        )}

        {error && (
          <div className="rv-state rv-state--error">
            <p className="rv-state-title">Preview unavailable</p>
            <p className="rv-state-text">The PDF viewer failed to load.</p>
            <a href={pdf} target="_blank" rel="noreferrer" className="rv-download-btn rv-download-btn--lg">
              <AiOutlineDownload size={16} />
              Open PDF directly
            </a>
          </div>
        )}

        <div style={{ display: error ? "none" : "block" }}>
          <Document
            file={pdf}
            onLoadSuccess={() => setLoading(false)}
            onLoadError={() => { setLoading(false); setError(true); }}
          >
            <Page
              pageNumber={1}
              scale={getScale(width)}
              onLoadError={() => setError(true)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>
      </motion.div>

      <style>{`
        .rv-page {
          background: var(--bg);
          min-height: 100vh;
          padding: 110px 24px 80px;
        }

        /* ── Header ── */
        .rv-header {
          max-width: 820px;
          margin: 0 auto 36px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .rv-eyebrow {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--blue);
          margin: 0 0 10px;
        }

        .rv-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text);
          margin: 0;
          line-height: 1;
        }

        .rv-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          background: rgba(99,179,237,0.12);
          border: 1px solid rgba(99,179,237,0.35);
          border-radius: 980px;
          color: var(--blue);
          font-size: 0.875rem;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .rv-download-btn:hover {
          background: rgba(99,179,237,0.22);
          border-color: rgba(99,179,237,0.6);
          box-shadow: 0 0 20px rgba(99,179,237,0.2);
          color: #90cdf4;
          text-decoration: none;
        }

        .rv-download-btn--lg {
          border-radius: 8px;
          padding: 13px 28px;
          font-size: 0.95rem;
          margin-top: 20px;
        }

        /* ── Viewer card ── */
        .rv-viewer-wrap {
          max-width: 820px;
          margin: 0 auto;
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .rv-viewer-wrap canvas {
          display: block;
          max-width: 100%;
        }

        /* ── States ── */
        .rv-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 40px;
          gap: 12px;
          width: 100%;
        }

        .rv-state-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
          margin: 0;
        }

        .rv-state-text {
          font-size: 0.875rem;
          color: var(--text-dim);
          margin: 0;
        }

        .rv-spinner {
          width: 28px;
          height: 28px;
          border: 1.5px solid var(--border);
          border-top-color: var(--blue);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          margin-bottom: 4px;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 860px) {
          .rv-viewer-wrap { border-radius: 12px; }
        }
      `}</style>
    </div>
  );
}

export default ResumeNew;
