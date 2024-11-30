import React from "react";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col space-y-2 items-center justify-center w-full h-full">
      <div className="w-16 h-16 border-4 border-t-gray-500 border-gray-300 rounded-full animate-spin"></div>
      <span className="text-xl"> Loading...</span>
    </div>
  );
}
