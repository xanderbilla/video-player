"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  progressRef: React.RefObject<HTMLDivElement>;
  durationSec: number;
  setElapsedSec: React.Dispatch<React.SetStateAction<number>>;
}

const ElapsedTimeTracker = (props: Props) => {
  const { videoRef, progressRef, durationSec, setElapsedSec } = props;
  const [displayTime, setDisplayTime] = useState("--:--");

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);

    const displayHours = hours > 0 ? hours + ":" : "";
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    return displayHours + displayMinutes + ":" + displaySeconds;
  };

  useEffect(() => {
    if (!videoRef.current || !progressRef.current) {
      return;
    }

    const element = videoRef.current;
    const progress = progressRef.current;

    const onTimeUpdate = () => {
      if (!element.currentTime || !element.duration || !progress.clientWidth) {
        return;
      }

      setElapsedSec(element.currentTime);
      progress.style.width = `${
        (element.currentTime / element.duration) * 100
      }%`;
    };

    element.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      element.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [videoRef, progressRef, durationSec, setElapsedSec]);

  useEffect(() => {
    const interval = setInterval(() => {
      const minutes = Math.floor(durationSec / 60);
      const seconds = Math.floor(durationSec % 60);
      const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      setDisplayTime(formattedTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [durationSec]);

  return (
    <div className="w-auto flex items-center justify-between gap-2 text-white font-medium">
      <div className="">{formatTime(videoRef.current?.currentTime ?? 0)}</div>
      {" | "}
      <div className="p-1 px-2 rounded-sm bg-slate-200/50">
        {displayTime}</div>
    </div>
  );
};

export default ElapsedTimeTracker;
