"use client";

import React, { useEffect, useState } from "react";
import Player from "@/app/components/Player";
import { useSearchParams } from "next/navigation";
import videoData from "@/static/data";
import NotFound from "../not-found";

type Props = {};

export default function VidPlayer({}: Props) {
  interface VideoData {
    title: string;
  }

  const [data, setData] = useState<VideoData>({
    title: "",
  });
  const searchParams = useSearchParams();
  const id = searchParams.get("view");
  console.log(id);

  useEffect(() => {
    const filteredData = () => {
      const filtered = videoData.filter((item) => item.id === id);
      setData(filtered[0]);
    };
    filteredData();
  }, [id]);

  return (
    <div
      className="w-screen h-screen flex flex-col transition-all ease-in-out duration-300"
    >
      {id ? (
        <>
          <div className="w-full h-full">
            <Player
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              cover="/db/images/cover.jpg"
              title={data?.title}
            />
          </div>
        </>
      ) : (
        <NotFound/>
      )}
    </div>
  );
}
