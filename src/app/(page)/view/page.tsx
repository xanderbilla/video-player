"use client";

import React, { useEffect, useState } from "react";
import Player from "./components/Player";
import { useSearchParams } from "next/navigation";
import videoData from "@/static/data";

type Props = {};

export default function Page({}: Props) {
  interface VideoData {
    title: string;
  }

  const [data, setData] = useState<VideoData>({
    title: "",
  });
  const searchParams = useSearchParams();
  const id = searchParams.get("player");
  console.log(id);

  useEffect(() => {
    const filteredData = () => {
      const filtered = videoData.filter((item) => item.id === id);
      setData(filtered[0]);
    };
    filteredData();
  }, [id]);

  return (
    <div className="w-full h-auto min-h-[calc(100vh-8rem)] flex items-center 
    justify-start flex-col transition-all ease-in-out duration-300">
      <h1 className="w-full text-center text-2xl py-2">{data?.title}</h1>
      <div className="w-[1280px] h-[560px] flex items-center justify-center p-2">
        <Player 
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
        cover="/db/images/cover.jpg"/>
        
      </div>
    </div>
  );
}
