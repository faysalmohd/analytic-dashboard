"use client";

import Link from "next/link";

export default function Tile({
  icon: Icon,
  title,
  path,
  count,
  className,
  borderbottom = true,
  active
}) {
  return (
    <Link
      href={path}
      className={`${className} p-2.5 w-full flex items-center gap-4 cursor-pointer hover:bg-gray-100 ${
        borderbottom ? "border-b border-gray-100 " : null
      } ${active ? "bg-gray-200 text-black rounded-lg font-bold" : "text-gray-500"}`}
    >
      <div className="w-1/6">
        <Icon size={20} className={active ? "text-black" : "text-gray-400"} />
      </div>

      <div className="w-4/6 capitalize text-sm">{title}</div>

      {count ? (
        <div className="w-1/6 bg-red-600 flex justify-center items-center rounded-sm text-xs text-white font-black">
          {count}
        </div>
      ) : null}
    </Link>
  );
}
