import React from 'react';

interface ListIconProps extends React.SVGProps<SVGSVGElement> {}

const ListIcon: React.FC<ListIconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        {...props}
    >
        <path d="M12 8.618V17.5m0-8.882a1 1 0 0 0-.553-.894l-.491-.246a7 7 0 0 0-4.12-.669l-.773.11A8 8 0 0 1 4.93 7H4v10h.38a8 8 0 0 0 2.197-.308l.553-.158a5 5 0 0 1 3.61.336l1.26.63m0-8.882a1 1 0 0 1 .553-.894l.491-.246a7 7 0 0 1 4.12-.669l.773.11Q18.5 7 19.068 7H20v10h-.38a8 8 0 0 1-2.197-.308l-.553-.158a5 5 0 0 0-3.61.336L12 17.5"/>
    </svg>
);

export default ListIcon;