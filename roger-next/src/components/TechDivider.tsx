import React from "react";

const TechDivider = ({ orientation = "horizontal", className = "" }) => {
  if (orientation === "vertical") {
    return (
      <svg
        width="8"
        height="300"
        viewBox="0 0 8 300"
        className={className}
        style={{ minHeight: "200px" }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 4 0 V 300"
          stroke="#FFD700"
          strokeWidth="2"
          strokeOpacity="0.7"
          filter="url(#glow)"
          fill="none"
        />
        {/* 发光节点，y值要小于等于300 */}
        <circle cx="4" cy="80" r="6" fill="#FFD700" filter="url(#glow)" />
        <circle cx="4" cy="220" r="6" fill="#FFD700" filter="url(#glow)" />
      </svg>
    );
  }
  // 横向分割线
  return (
    <svg width="100%" height="8" viewBox="0 0 1000 8" className={className}>
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 0 4 H 1000"
        stroke="#FFD700"
        strokeWidth="2"
        strokeOpacity="0.7"
        filter="url(#glow)"
        fill="none"
      />
      <circle cx="120" cy="4" r="6" fill="#FFD700" filter="url(#glow)" />
      <circle cx="700" cy="4" r="6" fill="#FFD700" filter="url(#glow)" />
    </svg>
  );
};

export default TechDivider;