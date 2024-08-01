"use client"

import React, { useEffect, useRef, useState } from "react";
import PlayBackRateIcon from "./PlayBackRateIcon";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
}   

const PlaybackRate = (props: Props) => {
    const { videoRef, setPlaybackRate: setPlaybackRateProp } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [playbackRate, setPlaybackRateState] = useState(1);

    const menuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const onDocumentClick = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (menuRef.current.contains(e.target as Node)) return;
            setIsMenuOpen(false);
        };

        document.addEventListener("click", onDocumentClick);

        return () => {
            document.removeEventListener("click", onDocumentClick);
        };
    }, []);

    const onRateChange = (rate: number) => {
        if (!videoRef.current) return;
        setPlaybackRateProp(rate);
        videoRef.current.playbackRate = rate;
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="flex items-center justify-center w-8 h-8 "
            >
                <PlayBackRateIcon/>
            </button>
            {isMenuOpen && (
                <ul
                    ref={menuRef}
                    className="absolute top-10 right-0 w-24 bg-black bg-opacity-50 rounded-md"
                >
                    {[0.5, 1, 1.5, 2].map((rate) => (
                        <li
                            key={rate}
                            onClick={() => onRateChange(rate)}
                            className="px-4 py-2 text-white cursor-pointer hover:bg-gray-700"
                        >
                            {rate}x
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PlaybackRate;