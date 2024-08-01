import Link from 'next/link';
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="h-screen">
      <span>Video Source Not Found! | ID: Unknown</span>
      <div className="">
        <Link href="/?view=9ce3b1b1-1b1b-11ec-8c4e-0242ac130003">
        Click Here!
        </Link>
      </div>
    </div>
  );
}