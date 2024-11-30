"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseBtnIcon from "../icons/closeBtnIcon";

type Props = {};

function DesktopNav({
  navLinks,
  isLogin,
}: {
  navLinks: { name: string; url: string }[];
  isLogin: boolean;
}) {
  return (
    <div className="hidden lg:flex justify-start items-center font-medium space-x-2">
      <div className="space-x-6 mr-4">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
      <Link
        href={isLogin ? "/dashboard" : "/login"}
        className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition ease-in-out"
      >
        {isLogin ? "Dashboard" : "Login"}
      </Link>
      <Link
        href={isLogin ? "/logout" : "/register"}
        className="px-4 py-2 border-2 border-gray-500 text-white rounded-full hover:bg-gray-600 transition ease-in-out"
      >
        {isLogin ? "Logout" : "Register"}
      </Link>
    </div>
  );
}

function MobileNav({
  navLinks,
  isLogin,
}: {
  navLinks: { name: string; url: string }[];
  isLogin: boolean;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon />
      </button>

      <div
        className={`fixed inset-0 z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform ease-in-out duration-300 bg-gray-800 p-4`}
      >
        <div className="flex items-center justify-between p-4">
          <ProjectLogo onlyProjectLogo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Close main menu</span>
            <CloseBtnIcon color="#fff" />
          </button>
        </div>
        <nav className="mt-5 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.url} className="block px-4 py-2">
              {link.name}
            </Link>
          ))}
          <Link
            href={`${isLogin ? "/dashboard" : "/login"}`}
            className="block px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition ease-in-out"
          >
            {isLogin ? "Dashboard" : "Login"}
          </Link>
          <Link
            href={`${isLogin ? "/logout" : "/register"}`}
            className="block px-4 py-2 border-2 border-gray-500 text-black rounded-full hover:bg-gray-600 transition ease-in-out"
          >
            {isLogin ? "Logout" : "Register"}
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default function Navbar({}: Props) {
  const isLogin = true;
  const path = usePathname();
  const pathUrl = path.split("/")[1];
  const isPlayer = pathUrl === "player" || pathUrl === "dashboard";

  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Player",
      url: "/player",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div
      className={`${
        isPlayer ? "hidden" : ""
      } w-full h-24 flex items-center justify-between gap-4 p-4 md:p-12 lg:p-20`}
    >
      <ProjectLogo onlyProjectLogo />
      <DesktopNav navLinks={navLinks} isLogin={isLogin} />
      <MobileNav navLinks={navLinks} isLogin={isLogin} />
    </div>
  );
}
