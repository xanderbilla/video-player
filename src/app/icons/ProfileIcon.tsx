import React from 'react';

interface ProfileIconProps {
    width?: number;
    height?: number;
    color?: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ width = 32, height = 32, color = 'currentColor' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
        <path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 19v-1.25c0-2.071-1.919-3.75-4.286-3.75h-3.428C7.919 14 6 15.679 6 17.75V19m9-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/>
    </svg>
);

export default ProfileIcon;