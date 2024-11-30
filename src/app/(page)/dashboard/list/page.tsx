"use client";

import React from "react";
import { ItemCard } from "../components/itemCard";
import Image from "next/image";
import { useState } from "react";
import DataList from "../components/dataList";

type Props = {};

const TABS = {
  GRID: "grid",
  LIST: "list",
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const dataItems = [
  {
    id: 1,
    name: "John Doe",
    value: "Apple Inc.",
  },
  {
    id: 2,
    name: "Jane Doe",
    value: "Google Inc.",
  },
  {
    id: 3,
    name: "John Smith",
    value: "Facebook Inc.",
  },
];
export default function Page({}: Props) {
  const [activeTab, setActiveTab] = useState(TABS.GRID);

  return (
    <div className="min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-24rem)] space-y-10">
      <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500">
        Videos List
      </span>
      <div className="w-full flex justify-end">
        <button className="w-48 h-12 bg-gray-200 flex items-center justify-center text-xl font-extrabold p-4 rounded-full text-gray-900">
          + Add Video
        </button>
      </div>
      <div className="flex items-center justify-between border-b-2 border-b-gray-200/20 pb-4">
        <div className="flex items-center space-x-4 text-xl font-medium">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === TABS.LIST
                ? "bg-blue-500 text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(TABS.LIST)}
          >
            List View
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === TABS.GRID
                ? "bg-blue-500 text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(TABS.GRID)}
          >
            Grid View
          </button>
        </div>
      </div>
      <div>
        {activeTab === TABS.GRID ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((card, index) => {
              return (
                <ItemCard
                  key={"item-card-" + index}
                  card={card}
                  layout={index % 2 === 0}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DataList
              data={dataItems}
              onEdit={(id) => console.log(`Edit item with id: ${id}`)}
              onDelete={(id) => console.log(`Delete item with id: ${id}`)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
