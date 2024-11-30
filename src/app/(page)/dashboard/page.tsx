import React from "react";
import CounterCard from "./components/counterCard";

interface Props {}

export default function Home({}: Props) {
  return (
    <div className="h-[calc(100vh-15rem)] md:h-[calc(100vh-24rem)] space-y-10">
      <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Dashboard
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CounterCard title="Total Videos" count={100} />
      </div>
    </div>
  );
}
