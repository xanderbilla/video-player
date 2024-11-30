import React, { useState } from "react";
import GearIcon from "../icons/GearIcon";
import FastFwdIcon from "../icons/FastFwdIcon";
import RewindIcon from "../icons/RewindIcon";

interface PlayRateProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const PlayRate: React.FC<PlayRateProps> = ({ videoRef }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const [visible, setVisible] = useState(false);

  const handleRateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRate = parseFloat(event.target.value);
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  const decreasePlaybackRate = () => {
    const newRate = Math.max(0.5, playbackRate - 0.5);
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  const increasePlaybackRate = () => {
    const newRate = Math.min(2, playbackRate + 0.5);
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  return (
    <div className="relative">
      {visible && (
        <div className="absolute bottom-[70px] right-0 flex flex-col space-y-4 p-4 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl backdrop-blur-md w-72"
        onMouseLeave={() => setVisible(false)}>
          <div className="flex items-center space-x-2">
            <span className="w-32 text-sm text-white font-semibold">
              Playback Rate
            </span>

            <div className="flex items-center space-x-2">
              <button
                onClick={decreasePlaybackRate}
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition duration-200 focus:outline-none focus:none"
              >
                <RewindIcon className="w-6 h-6" />
              </button>
              <span className="w-6 text-center text-sm text-white font-semibold">
                {playbackRate}x
              </span>
              <button
                onClick={increasePlaybackRate}
                className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition duration-200 focus:outline-none focus:none"
              >
                <FastFwdIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-32 text-sm text-white font-semibold">Quality</span>
            <select className="p-2 bg-gray-700 hover:bg-gray-600 text-sm text-white rounded transition duration-200 focus:outline-none focus:none">
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
              <option value="480p">480p</option>
              <option value="360p">360p</option>
            </select>
          </div>
        </div>
      )}
      <GearIcon onClick={() => setVisible(!visible)} />
    </div>
  );
};

export default PlayRate;
