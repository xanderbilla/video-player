import React from 'react';

interface SidebarIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ width = 28, height = 28, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path
            fill="none"
            stroke={color}
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 4v16m-5 0h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z"
        />
    </svg>
);

export default SidebarIcon;