import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume_Sudhanshu_.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handlePdfError = (error) => {
    console.error("PDF Load Error:", error);
    setPdfError(true);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {pdfError ? (
            <div style={{
              textAlign: "center",
              padding: "40px",
              color: "white",
              border: "2px dashed #444",
              borderRadius: "8px",
              backgroundColor: "#1a1a1a",
              margin: "20px"
            }}>
              <h3>Resume Preview</h3>
              <p style={{ margin: "20px 0", color: "#888" }}>
                PDF preview is temporarily unavailable
              </p>
              <Button
                variant="outline-light"
                href={pdf}
                target="_blank"
                size="lg"
              >
                <AiOutlineDownload />
                &nbsp;View/Download Resume
              </Button>
            </div>
          ) : (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadError={handlePdfError}
              onLoadSuccess={() => {
                console.log("PDF loaded successfully");
                setPdfError(false);
              }}
            >
              <Page
                pageNumber={1}
                scale={width > 786 ? 1.7 : 0.6}
                onLoadError={handlePdfError}
                onLoadSuccess={() => {
                  console.log("Page loaded successfully");
                }}
              />
            </Document>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
