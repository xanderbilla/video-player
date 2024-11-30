import React from "react";

type Props = {
  title: string;
  count: number;
};

const CounterCard: React.FC<Props> = ({ title, count }: Props) => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-6xl text-right font-bold">{count}</p>
    </div>
  );
};

export default CounterCard;
