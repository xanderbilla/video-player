import React from "react";

interface CloseBtnIconProps {
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}

const CloseBtnIcon: React.FC<CloseBtnIconProps> = ({
  width = 32,
  height = 32,
  color = "black",
  onClick,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <path
      d="M18 6L6 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseBtnIcon;
