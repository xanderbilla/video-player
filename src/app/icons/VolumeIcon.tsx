import React from "react";

export default function VolumeIcon({
  fill = "#fafcff",
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={fill}
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 9H7v6h3l5 4V5z"
      />
    </svg>
  );
}
