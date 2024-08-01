import React from 'react';

interface Props {
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VolumeController = (props: Props) => {
    const { volume, setVolume } = props;

    const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };

    return (
        <div className="flex items-center">
            <button
                onClick={() => setVolume((prev) => Math.max(0, prev - 0.1))}
                className="w-6 h-6 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                    />
                </svg>
            </button>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={onVolumeChange}
                className="w-12 h-1 bg-gray-300 mx-2"
            />
            <button
                onClick={() => setVolume((prev) => Math.min(1, prev + 0.1))}
                className="w-6 h-6 flex items-center justify-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </button>
        </div>
    );
};

export default VolumeController;