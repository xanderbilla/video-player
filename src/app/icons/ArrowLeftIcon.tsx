import React from "react";

interface ArrowLeftIconProps extends React.SVGProps<SVGSVGElement> {}

const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 12H4m0 0l6-6m-6 6l6 6"
    />
  </svg>
);

export default ArrowLeftIcon;
