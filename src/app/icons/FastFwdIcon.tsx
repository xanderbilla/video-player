import React from "react";

export default function FastFwdIcon({
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
        d="M5 15.196V8.804a1 1 0 0 1 1.53-.848l5.113 3.196a1 1 0 0 1 0 1.696L6.53 16.044A1 1 0 0 1 5 15.196m8 0V8.804a1 1 0 0 1 1.53-.848l5.113 3.196a1 1 0 0 1 0 1.696l-5.113 3.196a1 1 0 0 1-1.53-.848"
      />
    </svg>
  );
}
