"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

function DesktopNav({
  navLinks,
  isLogin,
}: {
  navLinks: { name: string; url: string }[];
  isLogin: boolean;
}) {
  return (
    <div className="hidden lg:flex justify-start items-center font-medium space-x-4">
      <div className="space-x-6">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.url}>
            {link.name}
          </Link>
        ))}
        {isLogin && (
          <Link
            href="/dashboard"
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition ease-in-out"
          >
            Dashboard
          </Link>
        )}
      </div>
      <Link
        href="/login"
        className={`${
          isLogin ? "hidden" : ""
        } px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition ease-in-out`}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={`${
          isLogin ? "hidden" : ""
        }  px-4 py-2 border-2 border-gray-500 text-white rounded-full hover:bg-gray-600 transition ease-in-out"`}
      >
        Register
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
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
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
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-5 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.url} className="block px-4 py-2">
              {link.name}
            </Link>
          ))}
          {isLogin && (
            <Link
              href="/dashboard"
              className="block px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition ease-in-out"
            >
              Dashboard
            </Link>
          )}
          {!isLogin && (
            <>
              <Link
                href="/login"
                className="block px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition ease-in-out"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block px-4 py-2 border-2 border-gray-500 text-black rounded-full hover:bg-gray-600 transition ease-in-out"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default function Navbar({}: Props) {
  const isLogin = true;
  const path = usePathname();
  const pathUrl = path.split("/")[1];
  const isPlayer = pathUrl === "player";

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
