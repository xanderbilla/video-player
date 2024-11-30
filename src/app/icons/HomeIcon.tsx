import React from 'react';

interface HomeIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({ width = 32, height = 32, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9M6 10l6-6l6 6M6 10l-2 2m14-2l2 2m-10 1h4v4h-4z"
        />
    </svg>
);

export default HomeIcon;