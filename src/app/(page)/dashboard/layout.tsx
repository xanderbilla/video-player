"use client"

import React, { useState } from "react";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <HomeIcon />, url: "" },
    { name: "List", icon: <ListIcon />, url: "list" },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className={`flex-1 flex transition-all duration-300 ${isSidebarOpen ? "pl-56" : "pl-0"}`}>
        <Sidebar menuItems={menuItems} toggle={isSidebarOpen} setToggle={setIsSidebarOpen} />
        <div className={`${urbanist.className} h-screen overflow-y-auto flex-1 p-8 rounded-md`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
