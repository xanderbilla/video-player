"use client";

import ProjectLogo from "@/app/components/ProjectLogo";
import ProfileIcon from "@/app/icons/ProfileIcon";
import SidebarIcon from "@/app/icons/SidebarIcon";
import Link from "next/link";

interface SidebarProps {
  menuItems: { name: string; icon: React.ReactNode; url: string }[];
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems, toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button
        className="absolute right-4 opacity-50 hover:opacity-80 transition-all ease-in-out duration-300 top-4 z-50 w-14 h-14 bg-gray-100/10 flex items-center justify-center rounded-full"
        onClick={handleToggle}
      >
        <SidebarIcon />
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white flex flex-col p-4 transition-transform duration-300 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ProjectLogo onlyProjectLogo />
        <div className="h-full flex flex-col items-start justify-between mt-8">
          <ul>
            {menuItems.map((item, index) => (
              <Link
                href={`/dashboard/${item.url}`}
                key={index}
                className="w-48 py-2 px-2 hover:bg-gray-700 rounded-md flex items-center"
              >
                <span className="w-8 mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </ul>
          <div className="">
            <Link
              href="/logout"
              className="w-48 py-2 px-4 hover:bg-gray-700 rounded-md flex items-center"
            >
              <span className="w-8 mr-3">
                <ProfileIcon />
              </span>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
