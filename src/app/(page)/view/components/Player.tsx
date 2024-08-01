"use client";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import PlayIcon from "./PlayIcon";
import PauseIcon from "./PauseIcon";
import ElapsedTimeTracker from "./ElapsedTimeTracker";
import PlaybackRate from "./PlaybackRate";
import Loading from "@/app/components/Loading";
import Backward from "./BackwardIcon";
import Forward from "./ForwardIcon";
import FullScrIcon from "./FullScrIcon";
import CaptionIcon from "./CaptionIcon";

const Video = styled.video<{ cover?: string }>`
  flex-shrink: 1;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  background-image: ${({ cover }) => (cover ? `url(${cover})` : "none")};
  background-size: cover;
`;

interface Props {
  src: string;
  muted?: boolean;
  autoPlay?: boolean;
  cover?: string;
}

const Player = (props: Props) => {
  const { src, autoPlay, muted, cover } = props;
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [durationSec, setDurationSec] = useState(1);
  const [elapsedSec, setElapsedSec] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

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
  }, [videoRef.current]);

  // This is where the playback rate is set on the video element.
  useEffect(() => {
    if (!videoRef.current) return;
    if (videoRef.current.playbackRate === playbackRate) return;
    videoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

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

  const forward30Sec = () => {
    if (!videoRef.current) return;
    const newTimeSec = videoRef.current.currentTime + 30;
    videoRef.current.currentTime = newTimeSec;
  };

  const backward10Sec = () => {
    if (!videoRef.current) return;
    const newTimeSec = videoRef.current.currentTime - 10;
    videoRef.current.currentTime = newTimeSec;
  };

  //full screen

  const fullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className="h-full flex flex-col cursor-pointer items-center justify-center 
    relative rounded-10 overflow-hidden hover:opacity-100"
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(true)}
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

      {/* Play Icon */}
      {!isPlaying && !isWaiting && (
        <PlayIcon
          onClick={handlePlayPauseClick}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 "
          } transition-opacity duration-300 ease-in-out`}
        />
      )}

      {/* controls */}
      {isPlaying && (
        <>
          {/* Full Screen Button */}
          <FullScrIcon
            onClick={fullScreen}
            className={`flex items-center justify-center absolute top-4 right-4 h-8 w-8 ${
              isHovered ? "opacity-0" : "opacity-100"
            }
        transition-opacity duration-300 ease-in-out`}
          />

          <div
            className={`absolute inset-x-0 bottom-0 h-20 w-full flex-col items-center 
          justify-center px-2 gap-4 bg-black py-4 bg-opacity-50 ${
            isHovered ? "opacity-0" : "opacity-100"
          }
          transition-opacity duration-300 ease-in-out`}
          >
            {/* Progress bar */}
            <div
              className="h-1 w-full bg-slate-600 rounded-full relative"
              onClick={progressBar}
            >
              <div
                ref={bufferRef}
                className="h-full bg-slate-400 rounded-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <div
                ref={progressRef}
                className="h-full bg-white rounded-full"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>

            <div className="w-full h-full flex items-center justify-between">
              <div className="w-full h-full flex items-center justify-start gap-4">
                {/* Play Pause Button */}
                <div className="w-8 h-full flex items-center justify-center ">
                  {!isPlaying && !isWaiting && (
                    <PlayIcon onClick={handlePlayPauseClick} />
                  )}
                  {isPlaying && !isWaiting && (
                    <PauseIcon onClick={handlePlayPauseClick} />
                  )}
                </div>

                {/* Elapsed time tracker */}
                <ElapsedTimeTracker
                  videoRef={videoRef}
                  progressRef={progressRef}
                  durationSec={durationSec}
                  setElapsedSec={setElapsedSec}
                />

                {/* forward and backward 10 sec */}
                <div className="w-auto h-full flex items-center justify-between gap-2">
                  <Backward onClick={backward10Sec} />
                  <Forward onClick={forward30Sec} />
                </div>
              </div>

              <div className="w-full h-full flex items-center justify-end gap-2">
                {/* Caption */}
                <CaptionIcon />

                {/* Playback Rate */}
                <PlaybackRate
                  videoRef={videoRef}
                  setPlaybackRate={setPlaybackRate}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Player;
