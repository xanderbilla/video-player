import { useEffect, useState } from "react";
import MuteIcon from "../icons/MuteIcon";
import VolumeIcon from "../icons/VolumeIcon";
import Volume2Icon from "../icons/Volume2";
import Volume1Icon from "../icons/Volume1";

const VolumeController = ({
  videoRef,
}: {
  videoRef: React.RefObject<HTMLVideoElement>;
}) => {
  const [isMuted, setIsMuted] = useState(videoRef.current?.muted || false);
  const [volume, setVolume] = useState(videoRef.current?.volume || 1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.volume = volume;
    }
  }, [isMuted, volume, videoRef]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
    setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center gap-2 text-gray-700">
      <button
        onClick={toggleMute}
        onMouseEnter={() => setVisible(true)}
        className="transition-transform duration-300 ease-in-out hover:scale-110"
      >
        {isMuted ? (
          <MuteIcon className="h-6 w-6 text-gray-700" />
        ) : volume === 0 ? (
          <VolumeIcon className="h-6 w-6 text-gray-700" />
        ) : volume > 0.5 ? (
          <Volume2Icon className="h-6 w-6 text-gray-700" />
        ) : (
          <Volume1Icon className="h-6 w-6 text-gray-700" />
        )}
      </button>
      {visible && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          onMouseLeave={() => setVisible(false)}
          className="w-24 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer transition-transform duration-300 ease-in-out"
        />
      )}
    </div>
  );
};

export default VolumeController;
