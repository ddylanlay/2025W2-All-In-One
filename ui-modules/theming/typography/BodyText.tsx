import React from "react";

interface BodyTextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

const BodyText: React.FC<BodyTextProps> = ({ children, size = "md" }) => {
  const fontSizeMap = {
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
  };

  const style = {
    fontFamily: '"Geist", sans-serif',
    fontWeight: 400,
    fontOpticalSizing: "auto" as const,
    fontSize: fontSizeMap[size],
    lineHeight: 1.6,
    margin: 0,
  };

  return <p style={style}>{children}</p>;
};

export default BodyText;
