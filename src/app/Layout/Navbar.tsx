import ProjectLogo from "@/app/components/ProjectLogo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-24 flex items-center justify-between gap-4">
      <ProjectLogo onlyProjectLogo />
      <div className="flex justify-start items-center font-medium gap-4">
        <Link
          href="https://github.com/xanderbilla/next-amplify-gen2"
          target="_blank"
        >
          <Image src="/icons/github.svg" alt="Menu" width={36} height={36} />
        </Link>
      </div>
    </div>
  );
}
