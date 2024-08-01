//create a layout for a product page in nextjs
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
    title: "Transformers: The Age of Extinction",
    description: "A page to display product details",
    };

export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-auto min-h-[calc(100vh-8rem)] flex items-center justify-start flex-col">
      <div className="h-auto w-[1280px] flex items-center justify-center p-2">
        {children}
      </div>
    </div>
  );
}