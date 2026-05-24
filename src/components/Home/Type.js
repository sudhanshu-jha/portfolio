import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Agentic Systems Engineer",
          "LLM & MCP Builder",
          "Full Stack + ML Engineer",
          "AI-First Product Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
