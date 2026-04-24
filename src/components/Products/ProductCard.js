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
        height: "100%",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(1000px) rotateY(4deg) rotateX(-3deg) translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 64px rgba(99,179,237,0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Card
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(99,179,237,0.18)",
          borderRadius: 16,
          backdropFilter: "blur(16px)",
          height: "100%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Category badge */}
        <div style={{ position: "absolute", top: 14, right: 14, zIndex: 10 }}>
          <Badge
            style={{
              background: "rgba(99,179,237,0.15)",
              border: "1px solid rgba(99,179,237,0.35)",
              borderRadius: 980,
              padding: "4px 12px",
              fontSize: "0.72rem",
              fontWeight: 500,
              color: "#63b3ed",
              backdropFilter: "blur(8px)",
            }}
          >
            {product.category}
          </Badge>
        </div>

        {/* Image */}
        <div style={{ height: 190, overflow: "hidden", borderRadius: "16px 16px 0 0", position: "relative" }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.7) saturate(0.8)",
              transition: "transform 0.4s ease, filter 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(0.9) saturate(1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(0.7) saturate(0.8)";
            }}
          />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(transparent, rgba(6,8,16,0.8))",
          }} />
        </div>

        <Card.Body style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Title */}
          <Card.Title style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#63b3ed",
            margin: 0,
          }}>
            {product.title}
          </Card.Title>

          {/* Price */}
          <div>
            <span style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#f0f4ff",
            }}>
              {product.price}
            </span>
          </div>

          {/* Description */}
          <Card.Text style={{
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "rgba(200,215,240,0.55)",
            flex: 1,
          }}>
            {product.description}
          </Card.Text>

          {/* Feature tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {product.features.map((f) => (
              <Badge
                key={f}
                style={{
                  background: "rgba(99,179,237,0.08)",
                  border: "1px solid rgba(99,179,237,0.2)",
                  borderRadius: 980,
                  padding: "4px 10px",
                  fontSize: "0.72rem",
                  fontWeight: 400,
                  color: "rgba(200,215,240,0.65)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,179,237,0.45)";
                  e.currentTarget.style.color = "#63b3ed";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(99,179,237,0.2)";
                  e.currentTarget.style.color = "rgba(200,215,240,0.65)";
                }}
              >
                {f}
              </Badge>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            <Button
              href={product.demoLink}
              target="_blank"
              style={{
                flex: 1,
                background: "rgba(99,179,237,0.12)",
                border: "1px solid rgba(99,179,237,0.35)",
                borderRadius: 980,
                color: "#63b3ed",
                fontSize: "0.875rem",
                padding: "8px 0",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,179,237,0.22)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(99,179,237,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99,179,237,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <AiOutlineEye /> Demo
            </Button>
            <Button
              href={product.buyLink}
              target="_blank"
              style={{
                flex: 1,
                background: "rgba(99,179,237,0.2)",
                border: "1px solid rgba(99,179,237,0.5)",
                borderRadius: 980,
                color: "#f0f4ff",
                fontSize: "0.875rem",
                padding: "8px 0",
                transition: "background 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(99,179,237,0.35)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(99,179,237,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(99,179,237,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <BsCart3 /> Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
