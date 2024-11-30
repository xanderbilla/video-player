import React from "react";

export default function RewindIcon({
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
      <path
        fill="none"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19.113 15.196V8.804a1 1 0 0 0-1.53-.848l-5.113 3.196a1 1 0 0 0 0 1.696l5.113 3.196a1 1 0 0 0 1.53-.848m-8 0V8.804a1 1 0 0 0-1.53-.848L4.47 11.152a1 1 0 0 0 0 1.696l5.113 3.196a1 1 0 0 0 1.53-.848"
      />
    </svg>
  );
}
