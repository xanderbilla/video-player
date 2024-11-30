"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseBtnIcon from "../icons/closeBtnIcon";
import { useAuth } from "react-oidc-context";
import Loading from "../components/Loading";
import NotFound from "../not-found";

type Props = {};

function DesktopNav({
  navLinks,
  signOutRedirect,
}: {
  navLinks: { name: string; url: string }[];
  signOutRedirect: () => void;
}) {
  const auth = useAuth();
  const isLogin = auth.isAuthenticated;

  return (
    <div className="hidden lg:flex justify-start items-center font-medium space-x-2">
      <div className="space-x-6 mr-4">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.url}>
            {link.name}
          </Link>
        ))}
        {isLogin && <Link href="/dashboard">Dashboard</Link>}
      </div>
      <button
        onClick={() =>
          isLogin ? signOutRedirect() : auth.signinRedirect()
        }
        className="px-4 py-2 bg-gray-200 text-black rounded-full hover:bg-gray-300 transition ease-in-out"
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

function MobileNav({
  navLinks,
  signOutRedirect,
}: {
  navLinks: { name: string; url: string }[];
  signOutRedirect: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const auth = useAuth();
  const isLogin = auth.isAuthenticated;

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
          {isLogin && (
            <Link href="/dashboard" className="block px-4 py-2">
              Dashboard
            </Link>
          )}
          <button
            onClick={() =>
              isLogin ? signOutRedirect() : auth.signinRedirect()
            }
            className="block px-4 py-2 border-2 border-gray-500 text-black rounded-full hover:bg-gray-600 transition ease-in-out"
          >
            {auth.isLoading ? "Loading..." : isLogin ? "Logout" : "Login"}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default function Navbar({}: Props) {
  const auth = useAuth();
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
      url: "/player?view=9ce3b1b1-1b1b-11ec-8c4e-0242ac130003",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  
  const signOutRedirect = () => {
    auth.removeUser();
    const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;
    const logoutUri = process.env.NEXT_PUBLIC_LOGOUT_URI;
    const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
    if (logoutUri && cognitoDomain) {
      window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    } else {
      console.error("Logout URI or Cognito Domain is not defined");
    }
  };

  if (auth.isLoading) {
    return <Loading />;
  }

  if (auth.error) {
    return <NotFound />;
  }

  return (
    <div
      className={`${
        isPlayer ? "hidden" : ""
      } w-full h-24 flex items-center justify-between gap-4 p-4 md:p-12 lg:p-20`}
    >
      <ProjectLogo onlyProjectLogo />
      <DesktopNav navLinks={navLinks} signOutRedirect={signOutRedirect} />
      <MobileNav navLinks={navLinks} signOutRedirect={signOutRedirect} />
    </div>
  );
}
