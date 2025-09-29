import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import Particle from "../Particle";

function Products() {
  const products = [
    {
      id: 1,
      title: "AI-Powered Code Assistant",
      description: "An intelligent code completion and debugging tool built with machine learning. Features real-time error detection, smart suggestions, and automated code optimization for multiple programming languages.",
      price: "$29.99/month",
      category: "AI Tools",
      features: ["Multi-language support", "Real-time debugging", "Smart autocomplete", "Code optimization"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    },
    {
      id: 2,
      title: "Portfolio Template Pro",
      description: "Premium responsive portfolio template with modern 3D effects, dark/light themes, and optimized performance. Perfect for developers, designers, and creative professionals.",
      price: "$49.99",
      category: "Web Templates",
      features: ["3D animations", "Responsive design", "Dark/Light mode", "SEO optimized"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    },
    {
      id: 3,
      title: "Data Visualization Suite",
      description: "Comprehensive data visualization library with interactive charts, real-time updates, and customizable themes. Built with D3.js and optimized for performance.",
      price: "$79.99",
      category: "Libraries",
      features: ["Interactive charts", "Real-time data", "Custom themes", "Export options"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    },
    {
      id: 4,
      title: "React Component Library",
      description: "Production-ready React component library with TypeScript support, comprehensive documentation, and extensive customization options for modern web applications.",
      price: "$39.99",
      category: "Libraries",
      features: ["TypeScript support", "Comprehensive docs", "Customizable", "Production ready"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    },
    {
      id: 5,
      title: "API Management Platform",
      description: "Complete API management solution with monitoring, analytics, rate limiting, and documentation generation. Streamline your API development workflow.",
      price: "$99.99/month",
      category: "SaaS Tools",
      features: ["API monitoring", "Analytics dashboard", "Rate limiting", "Auto documentation"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    },
    {
      id: 6,
      title: "Machine Learning Toolkit",
      description: "Advanced ML toolkit with pre-trained models, data preprocessing utilities, and visualization tools. Accelerate your machine learning projects.",
      price: "$199.99",
      category: "AI Tools",
      features: ["Pre-trained models", "Data preprocessing", "Visualization tools", "Model deployment"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      demoLink: "#",
      buyLink: "#"
    }
  ];

  return (
    <Container fluid className="product-section">
      <Particle />
      <Container>
        <div
          style={{
            transform: "perspective(1000px) rotateX(-5deg)",
            transformStyle: "preserve-3d",
            animation: "slideInDown 1s ease-out",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h1
            className="project-heading"
            style={{
              fontSize: "2.8em",
              textShadow: "0 15px 30px rgba(192, 132, 245, 0.4)",
              transform: "translateZ(30px)",
              background: "linear-gradient(45deg, #c084f5, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "20px",
            }}
          >
            My <strong className="purple">Products</strong>
          </h1>
          <p
            style={{
              color: "white",
              fontSize: "1.2em",
              transform: "translateZ(20px)",
              textShadow: "0 5px 10px rgba(192, 132, 245, 0.2)",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Discover premium tools, templates, and solutions designed to enhance your development workflow and boost productivity.
          </p>
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {products.map((product, index) => (
            <Col md={4} key={product.id} className="product-card" style={{ marginBottom: "30px" }}>
              <div
                style={{
                  transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-3deg' : '3deg'})`,
                  transformStyle: "preserve-3d",
                  animation: `slideIn${index % 3 === 0 ? 'Left' : index % 3 === 1 ? 'Up' : 'Right'} 1s ease-out ${0.2 + (index * 0.2)}s both`,
                }}
              >
                <ProductCard product={product} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .product-section {
          min-height: 100vh;
          padding: 50px 0;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(-45deg) translateY(-100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(-5deg) translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(-45deg) translateX(-100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(-3deg) translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateY(45deg) translateX(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateY(3deg) translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: perspective(1000px) rotateX(45deg) translateY(100px);
          }
          to {
            opacity: 1;
            transform: perspective(1000px) rotateX(0deg) translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}

export default Products;