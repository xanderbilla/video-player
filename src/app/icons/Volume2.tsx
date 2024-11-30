import React from "react";

export default function Volume2Icon({
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
      <g fill="none" stroke="#fafcff" strokeWidth="2">
        <path strokeLinejoin="round" d="M6 9H3v6h3l5 4V5z" />
        <path
          strokeLinecap="round"
          d="M18.5 5.5a9.19 9.19 0 0 1 0 13M15 8a5.657 5.657 0 0 1 0 8"
        />
      </g>
    </svg>
  );
}
