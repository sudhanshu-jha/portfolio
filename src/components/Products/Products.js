import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import Particle from "../Particle";

const PRODUCTS = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description: "Intelligent code completion and debugging tool with real-time error detection, smart suggestions, and automated optimization for multiple languages.",
    price: "$29.99/mo",
    category: "AI Tools",
    features: ["Multi-language", "Real-time debug", "Smart autocomplete", "Optimization"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Template Pro",
    description: "Premium responsive portfolio template with modern 3D effects, dark/light themes, and optimized performance for developers and creatives.",
    price: "$49.99",
    category: "Templates",
    features: ["3D animations", "Responsive", "Dark/Light mode", "SEO optimized"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
  {
    id: 3,
    title: "Data Visualization Suite",
    description: "Interactive chart library with real-time updates and customizable themes. Built with D3.js and optimized for performance.",
    price: "$79.99",
    category: "Libraries",
    features: ["Interactive charts", "Real-time data", "Custom themes", "Export options"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
  {
    id: 4,
    title: "React Component Library",
    description: "Production-ready React components with TypeScript support, comprehensive docs, and extensive customization for modern web apps.",
    price: "$39.99",
    category: "Libraries",
    features: ["TypeScript", "Full docs", "Customizable", "Production ready"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
  {
    id: 5,
    title: "API Management Platform",
    description: "Complete API management with monitoring, analytics, rate limiting, and auto-generated documentation to streamline your workflow.",
    price: "$99.99/mo",
    category: "SaaS",
    features: ["Monitoring", "Analytics", "Rate limiting", "Auto docs"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
  {
    id: 6,
    title: "Machine Learning Toolkit",
    description: "Advanced ML toolkit with pre-trained models, data preprocessing utilities, and visualization tools to accelerate your projects.",
    price: "$199.99",
    category: "AI Tools",
    features: ["Pre-trained models", "Preprocessing", "Visualization", "Deployment"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    demoLink: "#",
    buyLink: "#",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

function Products() {
  return (
    <Container fluid className="product-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>

        <motion.div style={{ textAlign: "center", marginBottom: 56 }} {...fadeUp(0)}>
          <p className="about-label" style={{ display: "inline-block", marginBottom: 16 }}>
            Marketplace
          </p>
          <h1 className="project-heading">
            My <span className="purple">Products</span>
          </h1>
          <p style={{ color: "rgba(200,215,240,0.5)", fontSize: "1.05rem", marginTop: 12, maxWidth: 560, margin: "12px auto 0" }}>
            Premium tools, templates and solutions to enhance your development workflow.
          </p>
        </motion.div>

        <Row style={{ justifyContent: "center" }}>
          {PRODUCTS.map((product, i) => (
            <Col key={product.id} md={4} className="project-card" style={{ marginBottom: 30 }}>
              <motion.div {...fadeUp(i * 0.07)} style={{ height: "100%" }}>
                <ProductCard product={product} />
              </motion.div>
            </Col>
          ))}
        </Row>

      </Container>
    </Container>
  );
}

export default Products;
