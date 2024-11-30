import React from "react";

export default function GearIcon({
  fill = "#ffff",
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
      <path
        fill="none"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v10m0 6v-.5M17.5 4v5m0 11v-5.56M6.5 4v2m0 14v-8.44M6.5 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 8a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
      />
    </svg>
  );
}
