import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <Image 
        src="/db/images/not-found.jpg"
        alt="404 Not Found"
        width={400}
        height={400}
      />
      <div className="mt-4">
        <Link href="/player?view=9ce3b1b1-1b1b-11ec-8c4e-0242ac130003" className="px-6 py-4 text-xl font-medium bg-gray-800 text-white rounded-full hover:bg-gray-600 transition duration-300">
            Click Here!
        </Link>
      </div>
    </div>
  );
}