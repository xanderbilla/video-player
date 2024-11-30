"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  const year = new Date().getFullYear();
  const path = usePathname();
  const pathUrl = path.split("/")[1];
  const isPlayer = pathUrl === "player" || pathUrl === "dashboard";
  return (
    <div
      className={`${
        isPlayer ? "hidden" : "p-4 md:p-12 lg:p-20"
      } w-full h-36 md:h-24 flex flex-col md:flex-row items-center justify-between gap-4"`}
    >
      <ProjectLogo />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="text-lg md:text-2xl">Video Player</h3>
        <p className="text-sm md:text-xs text-center">
          &copy; {year},{" "}
          <Link
            href="https://github.com/xanderbilla"
            target="_blank"
            className="underline font-bold text-neutral-600/80"
          >
            @xanderbilla
          </Link>
        </p>
      </div>
    </div>
  );
}
