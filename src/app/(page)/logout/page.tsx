"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface Props {}

export default function Page({}: Props) {
  const [counter, setCounter] = React.useState(5);
    const router = useRouter();
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        const timer = setTimeout(() => {
            router.push('/');
        }, 5000);
    
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [router]);
  return (
    <div>
      <div className="min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-20rem)] flex flex-col space-y-4 items-center justify-center">
        <span className='text-2xl'>You&apos;re Logged Out Successfully!</span>
        <span className='text-xl'>Redirecting to Home in {counter} seconds...</span>
      </div>
    </div>
  );
}



