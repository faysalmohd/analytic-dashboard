"use client";

import Tile from "./sidebarTile";
import Genetic from "../svg/genetic";
import Image from "next/image";
import user from "../assets/user.png";
import {
  Home,
  LayoutDashboard,
  Megaphone,
  Handshake,
  Settings,
} from "lucide-react";
import { usePathname } from 'next/navigation';


export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-1/5 h-[calc(100vh-16px)] p-5 rounded bg-white flex flex-col">
      {/* Top section */}
      <div className="flex items-center gap-3 mb-6 hover:bg-gray-50 cursor-pointer">
        <div className="bg-blue-700 rounded-lg p-2 text-white">
          <Genetic height={25} width={25} />
        </div>
        <div>
          <p className="text-sm font-bold">Team Lead</p>
          <p className="text-xs text-gray-500">Premium</p>
        </div>
      </div>

      {/* Main menu */}
      <div className="flex-1">
        <Tile
          icon={Home}
          title="Home"
          path="/home"
          count={1}
          active={pathname === "/home"}
        />
        <Tile
          icon={LayoutDashboard}
          title="Dashboard"
          path="/dashboard"
          active={pathname === "/dashboard"}
        />
        <Tile
          icon={Megaphone}
          title="Notifications"
          path="/notifications"
          count={2}
          active={pathname === "/notifications"}
        />
      </div>

      {/* Bottom / footer */}
      <div className="flex flex-col items-start gap-3 mt-auto">
        <Tile icon={Handshake} title="Help" path="/help" active={pathname === "/help"} />
        <Tile icon={Settings} title="Settings" path="/setting" active={pathname === "/setting"} />
        <div className="flex flex-row w-full mt-3 gap-3 hover:bg-gray-50 cursor-pointer">
          <div className="rounded-lg text-white">
            <Image src={user} width={40} height={40} alt="User" className="rounded-lg" />
          </div>
          <div>
            <p className="text-sm font-bold">Faysal</p>
            <p className="text-xs text-gray-500">faysal123@xyz.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
