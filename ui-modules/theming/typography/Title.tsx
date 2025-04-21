import React from "react";

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2;
}

const Title: React.FC<TitleProps> = ({ children, level = 1 }) => {
  const headingMap = {
    1: "h1",
    2: "h2",
  } as const;

  const HeadingTag = headingMap[level];

  const style = {
    fontFamily: '"Geist", sans-serif',
    fontWeight: level === 1 ? 700 : 600,
    fontOpticalSizing: "auto" as const,
    fontSize: level === 1 ? "2.5rem" : "2rem",
    lineHeight: 1.2,
    margin: 0,
  };

  return <HeadingTag style={style}>{children}</HeadingTag>;
};

export default Title;
