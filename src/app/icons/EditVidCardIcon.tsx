import React from "react";

interface EditVidCardIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const EditVidCardIcon: React.FC<EditVidCardIconProps> = ({
  width = 32,
  height = 32,
  fill = "#fff",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      d="M4 18v-8zm0 2q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588T22 6v4H4v8h8v2zm10 1v-3.075l5.525-5.5q.225-.225.5-.325t.55-.1q.3 0 .575.113t.5.337l.925.925q.2.225.313.5t.112.55t-.1.563t-.325.512l-5.5 5.5zm7.5-6.575l-.925-.925zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025zm3.525-3.525l-.475-.45l.925.925z"
    />
  </svg>
);

export default EditVidCardIcon;