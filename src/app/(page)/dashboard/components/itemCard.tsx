"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import EditVidCardIcon from "@/app/icons/EditVidCardIcon";
import DeleteIcon from "@/app/icons/DeleteIcon";

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const ItemCard = ({
  card,
  layout,
}: {
  card: Card;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = React.useRef(null);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
          >
            <button onClick={handleClose} className="absolute top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral-100 dark:text-neutral-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-black dark:text-white"
            >
              {card.category}
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
            >
              {card.title}
            </motion.p>
            <div className="py-10">{card.content}</div>
          </motion.div>
        </div>
      )}
      <motion.button
        onClick={handleOpen}
        className="group rounded-3xl bg-gray-100 dark:bg-neutral-900 h-56 w-72 md:h-64 md:w-auto overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute flex space-x-2 z-50 top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-8 w-8 bg-black/70 opacity-50 hover:opacity-90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-black/50 transition duration-300">
            <EditVidCardIcon width={24} height={24} fill="#fff"/>
          </div>
          <div className="h-8 w-8 bg-black/70 opacity-50 hover:opacity-90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:bg-black/50 transition duration-300">
            <DeleteIcon width={24} height={24} fill="#fff"/>
          </div>
        </div>
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-sm md:text-base font-medium font-sans text-left"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
