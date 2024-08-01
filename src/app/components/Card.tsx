"use client"

import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

export default function Card({ data }: Props) {

  const openPlayer = () => {
    window.open(`/view?player=${data.id}`, "_blank");
  }

  return (
    <div className="h-96 w-64 relative cursor-pointer hover:scale-105 transition-all 
    ease-in-out duration-300"
    onClick={openPlayer}
    >
      <Image
        src={data.srcVideo}
        alt={data.title}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="rounded-md hover:shadow-2xl shadow-lg transition-all ease-in-out duration-300"
      />
    </div>
  );
}
