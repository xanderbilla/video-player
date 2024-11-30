import ProfileIcon from "@/app/icons/ProfileIcon";
// import SidebarIcon from "@/app/icons/SidebarIcon";
import Link from "next/link";

interface SidebarProps {
  menuItems: { name: string; icon: React.ReactNode; url: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  return (
    <div className="w-56 bg-gray-800 text-white flex flex-col border-r-2 border-r-gray-100/10 px-4">
      
      {/* <button className="w-10 h-10 bg-gray-100/10 flex items-center justify-center rounded-full">
        <SidebarIcon />
      </button> */}

      <div className="h-full flex flex-col items-start justify-between">
        <ul>
          {menuItems.map(
            (
              item: { name: string; icon: React.ReactNode; url: string },
              index: number
            ) => (
              <Link
                href={`/dashboard/${item.url}`}
                key={index}
                className="w-48 py-2 px-2 hover:bg-gray-700 rounded-md flex items-center"
              >
                <span className="w-8 mr-3">{item.icon}</span>
                {item.name}
              </Link>
            )
          )}
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
  );
};

export default Sidebar;
