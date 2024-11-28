import React from "react";

export default function Pause({
  fill = "#fafcff",
  ...rest
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path fill="#fff" d="M14 18V6h3.5v12zm-7.5 0V6H10v12z"/>
    </svg>
  );
}
