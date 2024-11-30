"use client";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";
import ElapsedTimeTracker from "./ElapsedTimeTracker";
import PlaybackRate from "./PlaybackRate";
import Loading from "@/app/components/Loading";
import Backward from "../icons/BackwardIcon";
import Forward from "../icons/ForwardIcon";
import FullScrIcon from "../icons/FullScrIcon";
import CaptionIcon from "../icons/CaptionIcon";
import Image from "next/image";
import InfoIcon from "../icons/InfoIcon";
import Info from "../Layout/Info";
import VolumeController from "./VolumeController";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface Props {
  src: string;
  muted?: boolean;
  autoPlay?: boolean;
  cover?: string;
  title: string;
}

const Video = styled.video<{ cover?: string }>`
  flex-shrink: 1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: black;
`;

const Player = (props: Props) => {
  const { src, autoPlay, muted, cover, title } = props;
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const onWaiting = () => {
      if (isPlaying) setIsPlaying(false);
      setIsWaiting(true);
    };

    const onPlay = () => {
      if (isWaiting) setIsWaiting(false);
      setIsPlaying(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsWaiting(false);
    };

    const element = videoRef.current;

    const onProgress = () => {
      if (!element.buffered || !bufferRef.current) return;
      if (!element.buffered.length) return;
      const bufferedEnd = element.buffered.end(element.buffered.length - 1);
      const duration = element.duration;
      if (bufferRef && duration > 0) {
        bufferRef.current.style.width = (bufferedEnd / duration) * 100 + "%";
      }
    };

    const onTimeUpdate = () => {
      setIsWaiting(false);
      if (!element.buffered || !progressRef.current) return;
      const duration = element.duration;
      setDurationSec(duration);
      setElapsedSec(Math.floor(element.currentTime));
      if (progressRef && duration > 0) {
        progressRef.current.style.width =
          ((element.currentTime / duration) * 100).toFixed(2) + "%";
      }
    };

    element.addEventListener("progress", onProgress);
    element.addEventListener("timeupdate", onTimeUpdate);

    element.addEventListener("waiting", onWaiting);
    element.addEventListener("play", onPlay);
    element.addEventListener("playing", onPlay);
    element.addEventListener("pause", onPause);

    // clean up
    return () => {
      element.removeEventListener("waiting", onWaiting);
      element.removeEventListener("play", onPlay);
      element.removeEventListener("playing", onPlay);
      element.removeEventListener("pause", onPause);
      element.removeEventListener("progress", onProgress);
      element.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [isPlaying, isWaiting]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current.playbackRate === playbackRate) return;
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  useEffect(() => {
    if (showInfo && isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [showInfo, isPlaying]);

  const handlePlayPauseClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const progressBar = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pos = x / rect.width;
    seekToPosition(pos);
  };

  const seekToPosition = (pos: number) => {
    if (!videoRef.current) return;
    if (pos < 0 || pos > 1) return;

    const durationMs = videoRef.current.duration * 1000 || 0;

    const newElapsedMs = durationMs * pos;
    const newTimeSec = newElapsedMs / 1000;
    videoRef.current.currentTime = newTimeSec;
  };

  const forward15Sec = () => {
    if (!videoRef.current) return;
    const newTimeSec = videoRef.current.currentTime + 15;
    videoRef.current.currentTime = newTimeSec;
  };

  const backward10Sec = () => {
    if (!videoRef.current) return;
    const newTimeSec = videoRef.current.currentTime - 10;
    videoRef.current.currentTime = newTimeSec;
  };

  const fullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className="h-full w-full flex flex-col cursor-pointer items-center justify-center 
    relative overflow-hidden hover:opacity-100 bg-black"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
      onContextMenu={handleContextMenu}
    >
      <Video
        autoPlay={autoPlay}
        muted={muted}
        src={src}
        onClick={handlePlayPauseClick}
        ref={videoRef}
        cover={cover}
      />
      {isWaiting && <Loading />}

      {!isPlaying && !isWaiting && !showInfo && (
        <div className="w-full h-full">
          <PlayIcon
            onClick={handlePlayPauseClick}
            className={`absolute top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 transition-opacity duration-300 ease-in-out hover:scale-110`}
          />
        </div>
      )}

      {cover &&
        !isPlaying &&
        !isWaiting &&
        videoRef.current?.currentTime === 0 && (
          <Image
            src={cover}
            alt="cover"
            layout="fill"
            objectFit="cover"
            className="absolute z-10 top-0 left-0 h-full w-full object-cover"
          />
        )}

      <>
        {!showInfo ? (
          <div
            className={`px-4 absolute z-50 inset-x-0 top-0 h-24 bg-black py-4 bg-opacity-50 w-full 
        transition-opacity duration-1000 ease-in-out flex items-center justify-between text-white/80 text-2xl ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
          >
            <div className="flex items-center justify-center space-x-4">
              <ArrowLeftIcon
                onClick={() => window.history.back()}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <h1 className="text-center text-3xl">{title}</h1>
            </div>
            <button
              onClick={() => setShowInfo(true)}
              className="hover:bg-gray-200/10 font-medium rounded-full p-2 px-3 gap-2 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <InfoIcon className="h-6 w-6" />
              <span>Info</span>
            </button>
          </div>
        ) : (
          <Info setShowInfo={setShowInfo} />
        )}

        {!showInfo && (
          <div
            className={`absolute inset-x-0 bottom-0 h-20 w-full flex-col items-center 
          justify-center px-2 gap-4 bg-black py-4 bg-opacity-50 ${
            isHovered ? "opacity-0" : "opacity-100"
          }
          transition-opacity duration-300 ease-in-out`}
          >
            <div
              className="h-1 w-full bg-white rounded-full relative"
              onClick={progressBar}
            >
              <div
                ref={bufferRef}
                className="h-full bg-gray-400 rounded-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <div
                ref={progressRef}
                className="h-full bg-slate-800 rounded-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            <div className="w-full h-16 flex items-center justify-between">
              <div className="w-full h-full flex items-center justify-start gap-4">
                <div className="w-8 h-full flex items-center justify-center ">
                  {!isPlaying && !isWaiting && (
                    <PlayIcon
                      onClick={handlePlayPauseClick}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  )}
                  {isPlaying && !isWaiting && (
                    <PauseIcon
                      onClick={handlePlayPauseClick}
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  )}
                </div>
                <VolumeController videoRef={videoRef} />
                <div className="w-auto h-full flex items-center justify-between gap-2">
                  <Backward
                    onClick={backward10Sec}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <Forward
                    onClick={forward15Sec}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>

                <ElapsedTimeTracker
                  videoRef={videoRef}
                  progressRef={progressRef}
                  durationSec={durationSec}
                  setElapsedSec={setElapsedSec}
                />
              </div>

              <div className="w-full h-full flex items-center justify-end gap-4">
                <CaptionIcon className="transition-transform duration-300 ease-in-out hover:scale-110" />

                <PlaybackRate videoRef={videoRef} />
                <FullScrIcon
                  onClick={fullScreen}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Player;
