import React from "react";

import HomeIcon from "@/app/icons/HomeIcon";
import ListIcon from "@/app/icons/ListIcon";
import Sidebar from "./components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const menuItems = [
    { name: "Home", icon: <HomeIcon />, url: "home" },
    { name: "List", icon: <ListIcon />, url: "list" },
  ];

  return (
    <div className="min-h-[calc(100vh-15rem)] md:min-h-[calc(100vh-20rem)] flex flex-col h-auto px-16">
      <div className="flex">
        <Sidebar menuItems={menuItems} />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
