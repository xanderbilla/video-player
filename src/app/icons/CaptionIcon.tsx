import React from "react";

export default function CaptionIcon({
  fill = "#fafcff4d",
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fill={fill}
        d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM9 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.1 0 2.1-.45 2.828-1.172l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 9 8m7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 0 0 6.828 2.828l-1.414-1.414a2 2 0 1 1 0-2.828l1.415-1.413A4 4 0 0 0 16 8"
      />
    </svg>
  );
}
