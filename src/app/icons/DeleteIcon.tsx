import React from "react";

interface DeleteIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const DeleteIcon: React.FC<DeleteIconProps> = ({
  width = 32,
  height = 32,
  fill = "#fff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
    />
  </svg>
);

export default DeleteIcon;
