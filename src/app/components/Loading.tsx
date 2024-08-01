//create a Loading component that will be displayed when the video is loading

import React from "react";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-full">
      <div className="w-8 h-8 border-4 border-t-[#FFC107] rounded-full 
      animate-spin">
      </div>
    </div>
  );
}
