"use client";

import React, { useState } from "react";
import CloseBtnIcon from "../icons/closeBtnIcon";
import PlayBtnIcon from "../icons/PlayBtnIcon";
import Image from "next/image";

interface Props {
  setShowInfo: (show: boolean) => void;
}

export default function Info({ setShowInfo }: Props) {
  const [show, setShow] = useState(true);
  const [showMore, setShowMore] = useState(false);
  if (!show) return null;

  return (
    <div
      className={`p-10 absolute inset-x-0 top-0 h-[calc(100vh)] bg-black bg-opacity-75 w-full 
        transition-opacity duration-1000 ease-in-out flex flex-col ${
          show ? "items-start" : "items-center"
        } justify-start text-white/80 text-2xl opacity-100"
        }`}
    >
      <button
        onClick={() => {
          setShow(false);
          setShowInfo(false);
        }}
        className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <CloseBtnIcon color="black" />
      </button>
      <h1 className="h-24 text-4xl text-center w-full">
        Transformers: Dark Of The Moon
      </h1>
      <div className="flex flex-col md:flex-row w-full mt-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 p-6 rounded-lg">
          <div className="bg-gray-200/25 p-6 rounded-lg">
            <div className="my-4 flex space-x-2 text-xl">
              <button className="bg-gray-100 h-12 font-medium w-48 text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors">
                Watch Trailer
              </button>
              <span className="bg-gray-800 h-12 py-2 px-4 rounded-full">
                Season 1
              </span>
              <span className="px-2 py-1 rounded-full font-medium">
                Episode 3
              </span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <button className="shadow-md h-14 w-14 rounded-full bg-white hover:bg-gray-200 transition-colors">
                <PlayBtnIcon height={56} width={56} />
              </button>
              <div className="w-96 h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Run Time:</span>
              <span>2h 34m</span>
            </div>
          </div>
          <div className="mt-4 h-72 md:mt-8 bg-gray-200/25 p-6 rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div
              className={`text-lg ${
                showMore ? "overflow-y-scroll h-36" : "line-clamp-3"
              }`}
            >
              <p>
                The Autobots learn of a Cybertronian spacecraft on the moon and
                must race against the Decepticons to reach it and learn its
                secrets. The Autobots learn of a Cybertronian spacecraft on the
                moon and must race against the Decepticons to reach it and learn
                its secrets. The Autobots learn of a Cybertronian spacecraft on
                the moon and must race against the Decepticons to reach it and
                learn its secrets. The Autobots learn of a Cybertronian
                spacecraft on the moon and must race against the Decepticons to
                reach it and learn its secrets. The Autobots learn of a
                Cybertronian spacecraft on the moon and must race against the
                Decepticons to reach it and learn its secrets. The Autobots
                learn of a Cybertronian spacecraft on the moon and must race
                against the Decepticons to reach it and learn its secrets. The
                Autobots learn of a Cybertronian spacecraft on the moon and must
                race against the Decepticons to reach it and learn its secrets.
                The Autobots learn of a Cybertronian spacecraft on the moon and
                must race against the Decepticons to reach it and learn its
                secrets. The Autobots learn of a Cybertronian spacecraft on the
                moon and must race against the Decepticons to reach it and learn
                its secrets. The Autobots learn of a Cybertronian spacecraft on
                the moon and must race against the Decepticons to reach it and
                learn its secrets.
              </p>
            </div>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 text-white text-lg hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
        <div className="flex-1 p-6 rounded-lg">
          <h2 className="text-3xl mb-4">Cast & Info</h2>
          <p className="text-lg mb-2">
            <strong>Released On:</strong> June 29, 2011
          </p>
          <p className="text-lg mb-2">
            <strong>Studio:</strong> Paramount Pictures
          </p>
          <p className="text-lg mb-2">
            <strong>Tags:</strong> Action, Sci-Fi, Adventure
          </p>
          <h3 className="text-2xl mt-4 mb-2">Cast</h3>
          <div className="mt-4 overflow-x-auto">
            <div className="grid grid-flow-col gap-4 text-base">
              <div className="flex flex-col items-center h-56 w-40">
                <Image
                  src="/db/images/avatar.jpeg"
                  alt="Josh Duhamel"
                  width={100}
                  height={100}
                  className="rounded-sm h-full w-full object-cover"
                />
                <p className="text-center mt-2">Josh Duhamel as Lennox</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
