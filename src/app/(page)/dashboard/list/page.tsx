import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-[calc(100vh-15rem)] md:h-[calc(100vh-24rem)] space-y-10">
      <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500">
        Videos List
      </span>
      <div className="w-full flex justify-end">
        <button className="w-48 h-12 bg-gray-200 flex items-center justify-center text-xl font-semibold p-4 rounded-full text-gray-900">
          + Add Video
        </button>
      </div>
    </div>
  );
}
