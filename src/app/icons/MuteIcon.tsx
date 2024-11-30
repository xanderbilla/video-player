import React from "react";

export default function MuteIcon({
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
        <path strokeLinejoin="round" d="M7 9H4v6h3l5 4V5z" />
        <path strokeLinecap="round" d="m16 9.5l5 5m0-5l-5 5" />
      </g>
    </svg>
  );
}
