import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

function ProductCard({ product }) {
  return (
    <div
      style={{
        transform: "perspective(1000px) translateZ(0)",
        transformStyle: "preserve-3d",
        transition: "all 0.4s ease",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) translateZ(40px) rotateY(8deg) rotateX(-3deg)";
        e.currentTarget.style.boxShadow = "0 40px 80px rgba(192, 132, 245, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) translateZ(0)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
      }}
    >
      <Card
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(192, 132, 245, 0.3)",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(15px)",
          transform: "translateZ(10px)",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Category Badge */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            zIndex: 10,
            transform: "translateZ(30px)",
          }}
        >
          <Badge
            style={{
              background: "linear-gradient(135deg, rgba(192, 132, 245, 0.9), rgba(124, 58, 237, 0.9))",
              border: "1px solid rgba(192, 132, 245, 0.5)",
              borderRadius: "20px",
              padding: "5px 12px",
              fontSize: "0.8em",
              backdropFilter: "blur(10px)",
              boxShadow: "0 5px 15px rgba(192, 132, 245, 0.3)",
            }}
          >
            {product.category}
          </Badge>
        </div>

        {/* Product Image */}
        <div
          style={{
            transform: "translateZ(15px)",
            overflow: "hidden",
            borderRadius: "20px 20px 0 0",
            height: "200px",
            position: "relative",
          }}
        >
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{
              transform: "translateZ(5px) scale(1.1)",
              transition: "transform 0.4s ease",
              filter: "brightness(0.8) contrast(1.1)",
              height: "100%",
              objectFit: "cover",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateZ(15px) scale(1.2)";
              e.currentTarget.style.filter = "brightness(1) contrast(1.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateZ(5px) scale(1.1)";
              e.currentTarget.style.filter = "brightness(0.8) contrast(1.1)";
            }}
          />
          {/* Image Overlay Gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.6))",
              transform: "translateZ(10px)",
            }}
          />
        </div>

        <Card.Body style={{ transform: "translateZ(20px)", padding: "25px" }}>
          {/* Title */}
          <Card.Title
            style={{
              transform: "translateZ(25px)",
              fontSize: "1.3em",
              color: "#c084f5",
              textShadow: "0 5px 10px rgba(192, 132, 245, 0.3)",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            {product.title}
          </Card.Title>

          {/* Price */}
          <div
            style={{
              transform: "translateZ(20px)",
              marginBottom: "15px",
            }}
          >
            <span
              style={{
                fontSize: "1.4em",
                fontWeight: "bold",
                color: "#7c3aed",
                textShadow: "0 3px 6px rgba(124, 58, 237, 0.4)",
              }}
            >
              {product.price}
            </span>
          </div>

          {/* Description */}
          <Card.Text
            style={{
              textAlign: "justify",
              transform: "translateZ(15px)",
              lineHeight: "1.6",
              fontSize: "0.9em",
              color: "#ddd",
              marginBottom: "20px",
              minHeight: "80px",
            }}
          >
            {product.description}
          </Card.Text>

          {/* Features List */}
          <div
            style={{
              transform: "translateZ(18px)",
              marginBottom: "25px",
            }}
          >
            <h6
              style={{
                color: "#ffffff",
                marginBottom: "10px",
                fontSize: "0.9em",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
                textShadow: "0 2px 4px rgba(192, 132, 245, 0.5)",
              }}
            >
              Key Features:
            </h6>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {product.features.map((feature, index) => (
                <Badge
                  key={index}
                  style={{
                    background: "linear-gradient(135deg, rgba(192, 132, 245, 0.4), rgba(124, 58, 237, 0.4))",
                    color: "#ffffff",
                    border: "1px solid rgba(192, 132, 245, 0.6)",
                    borderRadius: "12px",
                    padding: "6px 12px",
                    fontSize: "0.75em",
                    fontWeight: "500",
                    textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                    boxShadow: "0 2px 8px rgba(192, 132, 245, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.6), rgba(124, 58, 237, 0.6))";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(192, 132, 245, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.4), rgba(124, 58, 237, 0.4))";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(192, 132, 245, 0.3)";
                  }}
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              transform: "translateZ(30px)",
              display: "flex",
              gap: "12px",
              justifyContent: "space-between",
            }}
          >
            <Button
              href={product.demoLink}
              target="_blank"
              style={{
                background: "linear-gradient(135deg, rgba(192, 132, 245, 0.8), rgba(124, 58, 237, 0.8))",
                border: "1px solid rgba(192, 132, 245, 0.5)",
                borderRadius: "10px",
                padding: "8px 16px",
                transition: "all 0.3s ease",
                transform: "translateZ(5px)",
                boxShadow: "0 5px 15px rgba(192, 132, 245, 0.3)",
                fontSize: "0.9em",
                flex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(12px) translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(192, 132, 245, 0.5)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 1), rgba(124, 58, 237, 1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(5px) translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(192, 132, 245, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(192, 132, 245, 0.8), rgba(124, 58, 237, 0.8))";
              }}
            >
              <AiOutlineEye /> Demo
            </Button>

            <Button
              href={product.buyLink}
              target="_blank"
              style={{
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(192, 132, 245, 0.8))",
                border: "1px solid rgba(124, 58, 237, 0.5)",
                borderRadius: "10px",
                padding: "8px 16px",
                transition: "all 0.3s ease",
                transform: "translateZ(5px)",
                boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)",
                fontSize: "0.9em",
                flex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(12px) translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(124, 58, 237, 0.5)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 1), rgba(192, 132, 245, 1))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateZ(5px) translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(124, 58, 237, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(192, 132, 245, 0.8))";
              }}
            >
              <BsCart3 /> Buy
            </Button>
          </div>
        </Card.Body>

        {/* Subtle Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(192, 132, 245, 0.05), rgba(124, 58, 237, 0.05))",
            borderRadius: "20px",
            pointerEvents: "none",
            transform: "translateZ(1px)",
          }}
        />
      </Card>
    </div>
  );
}

export default ProductCard;