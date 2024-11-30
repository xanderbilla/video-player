import React from "react";

import HomeIcon from "@/app/icons/HomeIcon";
import ListIcon from "@/app/icons/ListIcon";
import Sidebar from "./components/sidebar";
import { Urbanist } from "next/font/google";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const menuItems = [
    { name: "Home", icon: <HomeIcon />, url: "home" },
    { name: "List", icon: <ListIcon />, url: "list" },
  ];

  return (
    <div className="h-screen flex flex-col px-8 py-8">
      <div className="flex-1 flex">
        <Sidebar menuItems={menuItems} />
        <div className={`${urbanist.className} flex-1 p-8 overflow-hidden rounded-md`}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
