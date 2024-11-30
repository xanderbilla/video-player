import React from "react";

export default function Volume1Icon({
  fill = "#fafcff",
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...rest}
    >
      <g fill="none" stroke={fill} strokeWidth="2">
        <path strokeLinejoin="round" d="M8 9H5v6h3l5 4V5z" />
        <path strokeLinecap="round" d="M17 8a5.657 5.657 0 0 1 0 8" />
      </g>
    </svg>
  );
}
