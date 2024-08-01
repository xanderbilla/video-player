import React from "react";

export default function CaptionIcon({
  fill = "#fafcff",
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
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22Z"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M10.88 14.1499C10.37 14.5899 9.70999 14.8699 8.98999 14.8699C7.40999 14.8699 6.12 13.5899 6.12 11.9999C6.12 10.4099 7.39999 9.12988 8.98999 9.12988C9.71999 9.12988 10.38 9.39985 10.88 9.84985"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M17.88 14.1499C17.37 14.5899 16.71 14.8699 15.99 14.8699C14.41 14.8699 13.12 13.5899 13.12 11.9999C13.12 10.4099 14.4 9.12988 15.99 9.12988C16.72 9.12988 17.38 9.39985 17.88 9.84985"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
