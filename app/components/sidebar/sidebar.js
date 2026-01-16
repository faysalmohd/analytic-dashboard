"use client";

import Tile from "./sidebarTile";
import Logo from "../svg/logo";
import Image from "next/image";
import userAvatar from "../assets/user.png";
import {
  Home,
  LayoutDashboard,
  Megaphone,
  Handshake,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import LogoutButton from "../logout";

export default function Sidebar({ user }) {
  const pathname = usePathname();

  return (
    <div className="w-1/5 h-[calc(100vh-16px)] p-5 rounded bg-white flex flex-col">
      {/* Top section */}
      <div className="flex items-center gap-3 mb-6 hover:bg-gray-50 cursor-pointer">
        <div className="rounded">
          <Logo height={45} width={45} />
        </div>
        <div>
          <p className="font-black text-lg">Chartly</p>
          <p className="text-xs text-gray-500">Premium</p>
        </div>
      </div>

      {/* Main menu */}
      <div className="flex-1">
        <Tile
          icon={LayoutDashboard}
          title="Dashboard"
          path="/main/dashboard"
          active={pathname === "/main/dashboard"}
        />
        <Tile
          icon={Home}
          title="Home"
          path="/main/home"
          count={1}
          active={pathname === "/main/home"}
        />
        <Tile
          icon={Megaphone}
          title="Notifications"
          path="/main/notifications"
          count={2}
          active={pathname === "/main/notifications"}
        />
      </div>

      {/* Bottom / footer */}
      <div className="flex flex-col items-start gap-3 mt-auto">
        <Tile
          icon={Handshake}
          title="Help"
          path="/main/help"
          active={pathname === "/main/help"}
        />
        <Tile
          icon={Settings}
          title="Settings"
          path="/main/setting"
          active={pathname === "/main/setting"}
        />
        <div className="flex flex-row w-full mt-3 gap-3 hover:bg-gray-50 cursor-pointer">
          <div className="rounded-lg text-white">
            <Image
              src={user?.image || userAvatar}
              width={40}
              height={40}
              alt="User"
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-sm font-bold">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <LogoutButton />
      </div>
    </div>
  );
}
