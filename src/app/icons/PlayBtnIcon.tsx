import React from "react";

interface PlayBtnIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const PlayBtnIcon: React.FC<PlayBtnIconProps> = ({
  width = 32,
  height = 32,
  color = "black",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
    />
  </svg>
);

export default PlayBtnIcon;
