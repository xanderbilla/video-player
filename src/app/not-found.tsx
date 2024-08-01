import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="h-screen">
      <span>Video Source Not Found! | ID: Unknown</span>
    </div>
  );
}