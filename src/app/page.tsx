import React from 'react';

interface Props {}

export default function Home({}: Props) {
  return (
    <div>
      <div className="h-[calc(100vh-15rem)] md:h-[calc(100vh-20rem)] flex items-center justify-center">
        <span className='text-2xl'>Homepage</span>
      </div>
    </div>
  );
}